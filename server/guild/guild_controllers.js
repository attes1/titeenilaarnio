"use strict";

var Note = require('./guild_model.js'),
    Q    = require('q');

module.exports = exports = {
  get: function (req, res, next) {
    var $promise = Q.nbind(Guild.find, Guild);
    $promise()
      .then(function (guilds) {
        res.json(guilds);
      })
       .fail(function (reason) {
        next(reason);
      });
  },
/*
  post: function (req, res, next) {
    var note = req.body.note;
    var $promise = Q.nbind(Note.create, Note);
    $promise(note)
      .then(function (id) {
        res.send(id);
      })
      .fail(function (reason) {
        next(reason);
      });
  }
  */
};