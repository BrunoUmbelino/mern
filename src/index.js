const express = require('express')
const routes = require('./routes')

const app = express()
require('./config/DBConfig')

app.use(express.json())
app.use(routes)

app.listen(4444)