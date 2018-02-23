const express = require('express')
const next = require('next')
const proxy = require('http-proxy-middleware')

const { isProd, port } = require('./config/env')
const dev = !isProd
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(
    '/api',
    proxy({
      target: 'https://dog.ceo/',
      changeOrigin: true,
      logLevel: 'debug'
    })
  )

  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
