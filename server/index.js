var express = require('express');
var http = require('http-proxy');
// var path = require('path');
var app = express();
var router = express.Router();
var proxy = http.createProxyServer();

app.use(router);

// http://www.zhiyuninfo.com:8080/devicemanager-1.0/dmrest/devicetypes
app.use('/devicemanager', (req, res) => {
  proxy.web(req, res, {target: "http://www.zhiyuninfo.com:8080/devicemanager-1.0/dmrest"});
});

// router.get('/*', function(req, res) {
//   console.log('----');
//   res.sendFile(path.resolve(path.join(__dirname, '/../dist/index.html')));
// });

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});
