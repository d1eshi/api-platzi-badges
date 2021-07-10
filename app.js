const express = require('express')
const mongoose = require('mongoose')
// cors to use with any place
const cors = require('cors')

// routes for link request
const badge = require('./routes/badges.routes')

// we using express in app
const app = express()
const port = process.env.PORT || 3005



// requiere .env with pass and users
require('dotenv').config()

// connect to mongo db
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xrklu.mongodb.net/badgesDB?retryWrites=true&w=majority`, { useNewUrlParser: true,  autoReconnect: true, useUnifiedTopology: true }, () => {
  console.log('Connected to database')
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/", badge);

// waiting to connection to db
app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
