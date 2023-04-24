const express = require('express');
const app = express();
const path = require('path');  

app.use('/', express.static(path.join(__dirname, '/')));
console.log(path.join(__dirname, ''))

var server = app.listen(10001, function () {
  var host = server.address().address;
  var port = server.address().port;
  
  console.log('Server is working : PORT - ',port);
});