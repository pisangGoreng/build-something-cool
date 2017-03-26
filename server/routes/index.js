var express = require('express');
var router = express.Router();
var oauth = require('../helper/oauth.js')
var jwt = require('../helper/jwt.js')
var axios = require('axios');


router.post('/register', oauth.register, function (req, res, next) {
    res.send('sudah lewat middleware')
});
router.post('/login', oauth.login)

router.get('/corupt/:country', function(req, res, next) {
  axios.get(`http://inqstatsapi.inqubu.com/?api_key=8bae7400918ac174&data=corruption_index&countries=${req.params.country}`)
  .then(function (response) {
    console.log(response);
    res.json(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
});


module.exports = router;
