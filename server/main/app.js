"use strict";

var express = require('express');
var app = express();

var routers = {};
var GuildRouter = express.Router();
var BonusRouter = express.Router();

//app.use(app.router);
//router.initialize(app);

routers.GuildRouter = GuildRouter;
routers.BonusRouter = BonusRouter;

require('./config.js')(app, express, routers);

require('../guild/guild_routes.js')(GuildRouter);
require('../bonus/bonus_routes.js')(BonusRouter);

module.exports = exports = app;