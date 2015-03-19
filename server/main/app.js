"use strict";

var express = require('express');
var app = express();

var routers = {};

app.use(app.router);
routes.initialize(app);

var GuildRouter = express.Router();
routers.GuildRouter = GuildRouter;

require('./config.js')(app, express, routers);

require('../guild/guild_routes.js')(GuildRouter);

module.exports = exports = app;