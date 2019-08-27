const express = require("express")
const router = express.Router()
const { body } = require('express-validator')
const usersController = require("../controllers/users")
const isLoggedIn = require('../middleware/isLoggedIn')

// GET /api_1/users
router.get("/users", usersController.getUsers)

// POST /api_1/users
router.post("/users", [
    body('email')
    .isEmail()
    .withMessage('Please enter a valid email!')
    .normalizeEmail(),
    body('title')
    .trim()
    .escape(),
    body('first_name')
    .trim()
    .escape(),
    body('last_name')
    .trim()
    .escape()
],usersController.createUser)
// GET one ID /api_1/users
router.get('/users/:id', usersController.getUser)
// PUT /api_1/users
router.put('/users/:id', isLoggedIn, [
    body('title')
    .trim()
    .escape(),
    body('first_name')
    .trim()
    .escape(),
    body('last_name')
    .trim()
    .escape()
],usersController.putUser)
// PUT /api_1/users
router.delete('/users/:id', isLoggedIn, usersController.deleteUser)

module.exports = router