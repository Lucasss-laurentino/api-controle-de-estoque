const express = require('express');
const server = express();
require('dotenv').config();
const routerLogin = require('../Routes/routeLogin/index');
const cors = require('cors');

server.use(express.json());
server.use(cors());
server.use(routerLogin)

server.listen(process.env.PORT || 8000);

module.exports = server;