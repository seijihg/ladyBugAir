const User = require("../models/user")
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const serializer = require('../serializer/user_serializer')


exports.getUsers = (req, res, next) => {   
    User.find()
    .then(users => {
        return users.map(u => serializer(u))
    })
    .then(users => res.status(200).json({users: users}))
}

exports.createUser = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const error = new Error('Validation Failed.')
        error.statusCode = 422
        error.data = errors.array()
        throw error
    }

    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const dob = req.body.dob
    const title = req.body.title
    const email = req.body.email
    const password = req.body.password
    bcrypt.hash(password, 12)
    .then(hashedPass => {
        const user = new User({
            email: email,
            title: title,
            first_name: first_name,
            last_name: last_name,
            password: hashedPass,
            dob: dob 
        })
        return user.save()
    })
    .then(result => {
        res.status(201).json({
            message: "User Created!"
        })
    })
}

exports.getUser = (req, res, next) => {
    User.findById(req.params.id)
    .then(user => serializer(user))
    .then(user => res.json({user}))
}

exports.putUser = (req, res, next) => {
    
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const error = new Error('Validation Failed.')
        error.statusCode = 422
        error.data = errors.array()
        throw error
    }

    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const title = req.body.title

    User.findById(req.params.id)
    .then(user => {
        user.title = title
        user.first_name = first_name
        user.last_name = last_name
        return user.save()
    })
    .then(user => serializer(user))
    .then(result => {
        res.status(200).json({
            message: "User Updated!",
            user: result
        })
    })
}

exports.deleteUser = (req, res, next) => {
    User.findById(req.params.id)
    .then(user => {
        return User.findByIdAndRemove(req.params.id)
    })
    .then(result => res.status(200).json({message: 'User is gone!'}))
}

