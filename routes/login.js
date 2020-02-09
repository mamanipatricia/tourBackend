var express = require('express');
var router = express.Router();
const Controller = require('../controllers/loginController');

router.post('/login', login);

// functions
function login(req, res, next) {
  Controller.login(req.body)
  .then(response => {
    res.send(response)
  })
  .catch(next)
}

module.exports = router;
