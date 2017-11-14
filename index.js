const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const initRoutes = require('./routes/routes');

const mongoURL = mongoose.connect('mongodb://localhost/SS');
mongoose.Promise = global.Promise;


app.use(bodyParser.json());

initRoutes(app)

app.get('/', function(req, res) {
  console.log('hey')
  res.send({hello: "world"});
});


app.listen(process.env.port || 8080, function() {
  console.log('Listening on port 8080');
});
