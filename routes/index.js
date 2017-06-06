var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const prefix = 'accept';
  
  const hrd = Object.keys(req.headers).filter(k=>k.startsWith(prefix)).map(k=>({name:k, value: req.header(k)}));

  res.render('index', { title: 'Legacy App', headers: hrd });
});

module.exports = router;
