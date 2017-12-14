const apod = require('../models/apod')
var fetch = require('node-fetch')
var debug = require('debug')('nasaapod:server');
module.exports = () => {
  fetch('http://nasaapod.us-east-1.elasticbeanstalk.com/NasaAPOD/api/apod')
  .then(res => {
    return res.json()
  })
  .then(res => {
    const newApod = new apod({
      copyright: res.copyright,
      date: new Date(res.date).toLocaleString('en-us', { month: 'long', day: 'numeric', year: 'numeric'}),
      explanation: res.explanation,
      media_type: res.media_type,
      service_version: res.service_version,
      title: res.title,
      url: res.url
    })
    newApod.save()
  })
}