const apod = require('../models/apod')
var debug = require('debug')('nasaapod:server');
module.exports = {
  home: (req, res) => {
    apod.find({ $query: {}, $orderBy: { age: -1 }})
    .then(apods => {
      res.render('index', { title: 'Express', apods })
    })
  }
}