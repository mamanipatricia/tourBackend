var express = require('express');
var router = express.Router();
const Controller = require('../controllers/cityTourController');

const cityTourMiddleware = require('../middlewares/cityTourMiddleware')




router.get('/',cityTourMiddleware() ,displayCityTour);
// router.get('/', displayCityTour);

// functions
function displayCityTour(req, res, next) {
  Controller.displayCityTour()
    .then(response => {
      res.send(response)
    })
    .catch(next)
}

module.exports = router;
