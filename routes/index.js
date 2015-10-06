var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
	 title: 'Musik Quiz', 
     tagline: 'det är roligt'
	 });
});

module.exports = router;
