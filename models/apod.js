const mongoose = require('mongoose')

const apodSchema = new mongoose.Schema({
  copyright: String,
  date: String,
  explanation: String,
  hdurl: String,
  media_type: String,
  service_version: String,
  title: String,
  url: String
})

const apod = mongoose.model('apod', apodSchema)

module.exports = apod