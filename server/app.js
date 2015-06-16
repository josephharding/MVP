var express = require('express');
var app = express();
var server = require('http').createServer(app);

server.listen(9000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

exports = module.exports = app;

app.get('/', function(req, res){
  res.render('index')
})
