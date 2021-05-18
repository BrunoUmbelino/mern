const mongoose = require('mongoose')

const dbConfig = "mongodb+srv://mongodb:D38EVb7xLWWd8CU3@cluster0.gh0du.mongodb.net/annotations-app?retryWrites=true&w=majority"

const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = connection