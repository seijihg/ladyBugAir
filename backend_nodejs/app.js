require('dotenv').config()
const express = require("express")
const app = express()
const path = require('path')

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const mongoose = require("mongoose")

mongoose
.connect(
    process.env.MONGODB, { useNewUrlParser: true }
    )
.then(result => {
    app.listen(process.env.PORT || 8080)
})
.catch(err => console.log(err))

//-- CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})
//--

//-- Routes for API version 1
const apiv1 = "/api_v1"

const usersRoutes = require('./routes/users_routes')
app.use(apiv1, usersRoutes)

const flightsRoutes = require('./routes/flights_routes')
app.use(apiv1, flightsRoutes)

const locationRoutes = require('./routes/location_routes')
app.use(apiv1, locationRoutes)

const logoRoutes = require('./routes/logos_routes')
app.use(apiv1, logoRoutes)
//--

const authRoutes = require('./routes/auth_routes')
app.use('/auth', authRoutes)
