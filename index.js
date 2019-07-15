const proxy = require('express-http-proxy')
const morgan = require('morgan')
const express = require('express')
const debug = require('debug')
const app = express()
const dd = debug('express-redirect-service')

if (!process.env.PROXY_URI) {
    console.error('The PROXY_URI env must be specified!')
    process.exit(1)
}

dd('env %o', process.env)

function proxyReqPathResolver(req) {
    const url = `${process.env.PREFIX || ''}${req.url}${process.env.SUFFIX || ''}`
    dd('url %s', url)
    return url
}

const proxyMiddleware = proxy(process.env.PROXY_URI, {
    proxyReqPathResolver
})

app.use(morgan('combined'))

app.use('/', proxyMiddleware)

app.listen(process.env.PORT || 3000)
