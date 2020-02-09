var express = require('express');
var router = express.Router();
const Controller = require('../controllers/roleController');

router.get('/', showRoles);

// functions
function showRoles(req, res, next) {
  Controller.showRoles()
  .then(response => {
    res.send(response)
  })
  .catch(next)
}

module.exports = router;
