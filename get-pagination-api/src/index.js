const app = require('./app')
const config = require('./config/config')
const logger = require('./config/logger')

let server

const startServer = () => {
  return new Promise((resolve, reject) => {
    server = app.listen(config.port, () => {
      logger.info(`Server is listening on port ${config.port}`)
      resolve(server)
    })

    server.on('error', (error) => {
      logger.error(`Error starting server: ${error.message}`)
      reject(error)
    })
  })
}

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed')
      process.exit(1)
    })
  } else {
    process.exit(1)
  }
}

const unexpectedErrorHandler = (error) => {
  logger.error(error)
  exitHandler()
}

process.on('uncaughtException', unexpectedErrorHandler)
process.on('unhandledRejection', unexpectedErrorHandler)

startServer()
