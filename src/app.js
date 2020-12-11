const express = require('express');

const { sayHello } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  const string = sayHello(req.params.string);
  res.status(200).send({ result: string });
});

module.exports = app;
