const express = require('express')
const docsRoute = require('./docs.route')
const memberRoute = require('./member.route')
const ticketRoute = require('./ticket.route')

const router = express.Router()

const defaultRoutes = [
  {
    path: '/member',
    route: memberRoute
  },
  {
    path: '/ticket',
    route: ticketRoute
  },
  {
    path: '/docs',
    route: docsRoute
  }
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

module.exports = router
