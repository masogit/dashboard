var express = require('express');
var http = require('http-proxy');
var path = require('path');
var app = express();
var proxy = http.createProxyServer();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(express.static(__dirname + '/../dist'));

app.use('/devicemanager', (req, res) => {
  // http://www.zhiyuninfo.com:8080/devicemanager-1.0/dmrest/devicetypes
  proxy.web(req, res, {target: "http://www.zhiyuninfo.com:8080/devicemanager-1.0/dmrest"});
});

app.get('/data/:folder/:filename', function (req, res) {
  try {
    var data = require('../data/' + req.params.folder + '/' + req.params.filename + '.json');
  } catch (e) {
    res.send(null);
  }  
  res.send(data);
});

app.get('/*', function(req, res) {
  res.sendFile(path.resolve(path.join(__dirname, '/../dist/index.html')));
});

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});
