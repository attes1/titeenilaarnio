"use strict";

var Bonus = require('./bonus_model.js');
var Q = require('q');
//var Guilds = require('../guild/guild_model.js');

module.exports = exports = 
{
  post: function (req, res, guild, Qcode, next) 
  {
    console.log('jee');
    
    var fetch = Q.when(Bonus.findOne({ QRcode: Qcode }).exec());
    fetch.then(function (code) 
    {
      if(code.checked == false)
      {
        code.update( { checked: true } );
        var aquire = Q.when(guilds.findOne({shortName: guild}).exec());
        aquire.then(function (aquirer)
        {
          
          aquirer.update({ $push: { scores: { score: 0.5 , competition: 'bonus', bonusCode: QRcode }}}).exec();
          
          console.log('ebin');
          res.send('k');
        })
        .fail();
      }
    })
    .fail(function (reason) 
    {
      next(reason);
    });
  }
};

