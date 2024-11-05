const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const httpStatus = require('http-status')
const morgan = require('./config/morgan')
const routes = require('./routes')
const { errorConverter, errorHandler } = require('./middlewares/error')
const ApiError = require('./utils/ApiError')
const { getPrismaClient } = require('./config/database')
const app = express()

app.use(morgan.successHandler)
app.use(morgan.errorHandler)

getPrismaClient()
app.use(helmet())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// enable cors
app.use(cors())
app.options('*', cors())

app.use(routes)

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'))
})

// convert error to ApiError, if needed
app.use(errorConverter)

// handle error
app.use(errorHandler)

module.exports = app
