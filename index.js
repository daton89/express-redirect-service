const proxy = require('express-http-proxy')
const express = require('express')
const app = express()

if (!process.env.PROXY_URI) {
    console.error('The PROXY_URI env must be specified!')
    process.exit(1)
}

function proxyReqPathResolver(req) {
    return `${process.env.PREFIX}${req.url}${process.env.SUFFIX}`
}

const proxyMiddleware = proxy(process.env.PROXY_URI, {
    proxyReqPathResolver
})

app.get('/*', proxyMiddleware)

app.listen(process.env.PORT || 3000)
