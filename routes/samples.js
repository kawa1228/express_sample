var express = require('express');
var router = express.Router();

// /samples
router.get('/', function(req, res, next) {
  var param = {"値":"これはサンプルAPIです"};
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

// /samples/hello
router.get('/hello', function(req, res, next) {
  var param = {"result":"Hello World !"};
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

// /samples/hello/(任意の文字列)
router.get('/hello/:place', function(req, res, next) {
  var param = {
		"result": `Hello ${req.params.place} !!`,
		"shop name": req.query.shop
	};
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

module.exports = router;