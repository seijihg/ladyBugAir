const User = require("../models/user")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.login = (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    User.findOne({email: email})
    .then(user => {
        if (!user) {
            const error = new Error('An user with this email could not be found.')
            error.statusCode = 401
            throw error
        }
        loadedUser = user
        return bcrypt.compare(password, user.password)
    })
    .then(isPassCorrect => {
        if (!isPassCorrect) {
            const error = new Error('Wrong password.')
            error.statusCode = 401
            throw error
        }
        const token = jwt.sign({
            email: loadedUser.email,
            userId: loadedUser._id
        }, 
        process.env.SECRET_JWT,
        {expiresIn: '1h'})
        res.status(200).json({token: token, userId: loadedUser._id})
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err)
    })
}