"use strict";

var mongoose = require('mongoose');

var guildShortNames = [ 'tite', 'digit', 'otit', 'tik', 'cluster' ];
var competitions = [ 'mic', 'irc', 'cw', 'jukka', 'robo', 'hw', 'bonus' ];

var GuildSchema = new mongoose.Schema({
  shortName: { 
    type: String,
    enum: guildShortNames,
    index: true
  },

  fullName: String,
  
  scores: [
    {
      score: Number,
      competition: {
        type: String,
        enum: competitions
      },
      bonusCode: String
    }
  ]
});

module.exports = exports = mongoose.model('guilds', GuildSchema);