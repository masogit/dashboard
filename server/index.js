var express = require('express');
var http = require('http-proxy');
var path = require('path');
var app = express();
var proxy = http.createProxyServer();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.urlencoded({ 'extended': 'true' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(express.static(__dirname + '/../dist'));

app.use('/devicemanager', (req, res) => {
  // http://www.zhiyuninfo.com:8080/devicemanager-1.0/dmrest/devicetypes
  proxy.web(req, res, { target: "http://www.zhiyuninfo.com:8080/devicemanager-1.0/dmrest" });
});

app.get('/data/:folder/:filename', function (req, res) {
  var filename = __dirname + '/../data/' + req.params.folder + '/' + req.params.filename + '.json';
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err)
      throw err;
    else
      res.send(JSON.parse(data));
  });
  // try {
  //   var data = require('../data/' + req.params.folder + '/' + req.params.filename + '.json');
  // } catch (e) {
  //   res.send(null);
  // }
  // res.send(data);
});

app.post('/data/:folder/:filename', function (req, res) {
  var filename = __dirname + '/../data/' + req.params.folder + '/' + req.params.filename + '.json';
  fs.writeFile(filename, JSON.stringify(req.body, null, ' '), 'utf8', (err) => {
    if (err) {
      console.log(err);
      res.send({ status: 'error', msg: 'update file failed' });
    }
    else
      res.send({ status: 'ok', msg: 'update file success' });
  });
});

app.get('/*', function (req, res) {
  res.sendFile(path.resolve(path.join(__dirname, '/../dist/index.html')));
});

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});
