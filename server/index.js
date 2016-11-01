var express = require('express');
var path = require('path');
var app = express();


app.get('/*', function(req, res) {
  console.log('----');
  res.sendFile(path.resolve(path.join(__dirname, '/../dist/index.html')));
});

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});
