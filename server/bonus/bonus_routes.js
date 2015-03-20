"use strict";

var controller = require('./bonus_controller.js');

module.exports = exports = function (router) 
{
  router.route('/')
    .get(controller.get);
};