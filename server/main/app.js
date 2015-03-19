"use strict";

var express = require('express');
var app = express();

var routers = {};
var GuildRouter = express.Router();

//app.use(app.router);
//router.initialize(app);

routers.GuildRouter = GuildRouter;

require('./config.js')(app, express, routers);

require('../guild/guild_routes.js')(GuildRouter);

module.exports = exports = app;