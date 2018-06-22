var express = require('express');
var router = express.Router();
var moment = require('moment');


/* GET home page. */
router.get('/add', function(req, res, next) {
    console.log(Date.now());
  res.render('queues/add', { title: 'Express' });
});

module.exports = router;
