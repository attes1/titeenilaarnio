"use strict";

var controller = require('./guild_controllers.js');

module.exports = exports = function (router) {
  router.route('/')
    .get(controller.get);
};