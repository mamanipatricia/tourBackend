var express = require('express');
var router = express.Router();
const Controller = require('../controllers/userController');

router.get('/', displayUsers);
router.get('/:id', displayUser);
router.get('/:id/city-tours', displayUserCityTours);

// functions
function displayUsers(req, res, next) {
  Controller.displayUsers()
  .then(response => {
    res.send(response)
  })
  .catch(next)
}

function displayUser(req, res, next) {
  Controller.displayUser(req.params.id)
  .then(response => {
    res.send(response)
  })
  .catch(next)
}

function displayUserCityTours(req, res, next) {
  Controller.displayUserCityTours(req.params.id)
  .then(response => {
    res.send(response)
  })
  .catch(next)
}

module.exports = router;
