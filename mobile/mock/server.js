const express = require('express')
const routes = require('./routes')
const router = express.Router()

function initRoutes () {
  const routeKeys = Object.keys(routes)
  routeKeys.forEach((key) => {
    let [method, api] = key.split(/\s+/)
    method = method.toLowerCase()
    router[method](api, (req, res) => {
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      res.status(200).json(routes[key])
    })
  })
  return router
}

module.exports = initRoutes
