const express = require('express');

const app = express();
const debug = require('debug')('app:server');
const {
  CONFIG_API: { PORT },
} = require('./config/index');

app.use(express.json());

app.listen(PORT, () => {
  debug('servicio iniciado');
});
