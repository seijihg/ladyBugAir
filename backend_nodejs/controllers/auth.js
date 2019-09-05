const User = require("../models/user");
const Flight = require("../models/flight");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email })
    .populate({path: "bookings"})
    .then(user => {
      if (!user) {
        const error = new Error("An user with this email could not be found.");
        error.statusCode = 401;
        throw error;
      }
      loadedUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then(isPassCorrect => {
      if (!isPassCorrect) {
        const error = new Error("Wrong password.");
        error.statusCode = 401;
        throw error;
      }
      const token = jwt.sign(
        {
          userId: loadedUser._id.toString()
        },
        process.env.SECRET_JWT,
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        data: {
          dob: loadedUser.dob,
          email: loadedUser.email,
          id: loadedUser._id.toString(),
          title: loadedUser.title,
          first_name: loadedUser.first_name,
          last_name: loadedUser.last_name,
          bookings: loadedUser.bookings
        }
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.authenticate = (req, res, next) => {
  userId = req.userId;
  User.findOne({ _id: userId })
  .populate({path: "bookings"})
  .then(data => {
      res.status(200).json({
          data: {
              dob: data.dob,
              email: data.email,
              id: data._id.toString(),
              title: data.title,
              first_name: data.first_name,
              last_name: data.last_name,
              bookings: data.bookings
          }
      })
  })
  .catch(err => console.log)
};
