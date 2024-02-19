var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});
router.get('/register', function(req,res){
  res.send("this is a register route");
});

module.exports = router;
