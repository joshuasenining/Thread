// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var sassMiddleware = require("node-sass-middleware");

// set up Sass
app.use(sassMiddleware({
  src: __dirname + '/public',
  dest: '/tmp'
}));

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(express.static('/tmp'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
