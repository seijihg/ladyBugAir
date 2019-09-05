const User = require("../models/user");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const serializer = require("../serializer/user_serializer");
const jwt = require('jsonwebtoken')

exports.getUsers = (req, res, next) => {
  User.find()
    .then(users => {
      return users.map(u => serializer(u));
    })
    .then(users => res.status(200).json({ users: users }));
};

exports.createUser = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation Failed.");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }

  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const dob = req.body.dob;
  const title = req.body.title;
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email })
    .then(user => {
      if (user) {
        const error = new Error("This email has been taken.");
        error.statusCode = 500;
        res.status(500).json({error})
        throw error;
      }
      return bcrypt.hash(password, 12);
    })
    .then(hashedPass => {
      const user = new User({
        email: email,
        title: title,
        first_name: first_name,
        last_name: last_name,
        password: hashedPass,
        dob: dob,
        admin: false,
        bookings: []
      });
      return user.save();
    })
    .then(user => {
        const token = jwt.sign({
            userId: user._id.toString()
        }, 
        process.env.SECRET_JWT,
        {expiresIn: '1h'})
        res.status(200).json({
            token: token,
            message:"User Created",
            data: {
              dob: user.dob,
              email: user.email,
              id: user._id.toString(),
              title: user.title,
              first_name: user.first_name,
              last_name: user.last_name,
              bookings: user.bookings
            }
        })
    })
    .catch(err => {
      console.log(err)
    });
};

exports.getUser = (req, res, next) => {
  User.findById(req.params.id)
    .then(user => serializer(user))
    .then(user => res.json({ user }));
};

exports.putUser = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation Failed.");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }

  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const title = req.body.title;

  User.findById(req.params.id)
    .then(user => {
      user.title = title;
      user.first_name = first_name;
      user.last_name = last_name;
      return user.save();
    })
    .then(user => serializer(user))
    .then(result => {
      res.status(200).json({
        message: "User Updated!",
        user: result
      });
    });
};

exports.deleteUser = (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      return User.findByIdAndRemove(req.params.id);
    })
    .then(result => res.status(200).json({ message: "User is gone!" }));
};
