"use strict";

var Bonus = require('./bonus_model.js');
var Q = require('q');
//var Guilds = require('../guild/guild_model.js');
//next, guild, Qcode
module.exports = exports = 
{
  post: function (req, res) 
  {
    console.log('HOMO');
    //res.send('HOMO');
    
    var Qcode = req.qrcode;
    console.log(Qcode);

    var guild = req.guild;
    console.log(guild);
    
    var fetch = Q.when(Bonus.findOne({ qrCode: Qcode }).exec());
    fetch.then(function (code) 
    {
      console.log('HOMO0');      
      console.log(code);
      console.log('HOMO1');
      if(code.checked == false)
      {
        console.log('HOMO2');
        code.update( { checked: true } );
        var aquire = Q.when(guilds.findOne({shortName: guild}).exec());
        aquire.then(function (aquirer)
        {
          console.log('derp');
          console.log()
          console.log('HOMO3');
          aquirer.update({ $push: { scores: { score: 0.5 , competition: 'bonus', bonusCode: QRcode }}}).exec();
          
          console.log('ebin');
          res.send('k');
        })
        .fail(function (reason)
          {
            console.log('HOMO4');
            console.log(reason);
            res.send(reason);

          }
        );
      }
    })
    .fail(function (reason) 
    {
console.log('HOMO5');
        res.send(reason);
        console.log(reason);
//      next(reason);
    });
    
  }
};

