const express = require('express')
const mongoose = require('mongoose')
const app = express()
// cors to use with any place
const cors = require('cors')

// routes for link request
const badge = require('./routes/badges.routes')

// require .env with pass and users
require('dotenv').config()
// we using express in app
const port = process.env.PORT || 3000


app.use(cors())
app.use(express.json())

// connect to mongo db
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xrklu.mongodb.net/badgesDB?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Connected to database')
})
app.use("/", badge)

// waiting to connection to db
app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
