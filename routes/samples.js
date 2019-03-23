var express = require('express');
var router = express.Router();

// /samples の各API

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

// /samples にPOSTメソッドのリクエストを投げると、JSONがかえってくる
// curl -X POST "http://localhost:3000/samples" -d '{"card": "カード"}'
router.post('/', function(req, res, next) {
  var param = {"値": "POSTメソッドのリクエストを受け付けました","bodyの値":req.body.card};
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.send(param);
});

module.exports = router;