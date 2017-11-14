const express = require('express');

const app = express();

const initRoutes = require('./routes/routes');

initRoutes(app)

app.get('/', function(req, res) {
  console.log('hey')
  res.send({hello: "world"});
});

// app.use(routes);

app.listen(process.env.port || 8080, function() {
  console.log('Listening on port 8080');
});
