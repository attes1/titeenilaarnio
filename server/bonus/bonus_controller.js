"use strict";

var Bonus = require('./bonus_model.js');
var Q = require('q');
var Guilds = require('../guild/guild_model.js');

module.exports = exports = 
{
  post: function (req, res, guild, Qcode, next) 
  {

    var fetch = Q.when(Bonus.findOne({ QRcode: Qcode }).exec());
    fetch.then(function (code) 
    {
      if(code.checked = false)
      {
     //   code.update( { checked: true } );

     //   var aquire = Q.when(guilds.findOne({shortName: guild}).exec());
        //aquire.then(function (aquirer)
        //{
      //    aquirer.update({ $pushAll:{ scores: { score: 0.5 , competition: 'bonus', bonusCode: QRcode }},
/*            function (err)
            {
              if(err){
                console.log(err);
              }else{
                console.log("Successfully added");
              }
            }
          });*/
      //  });
        //})  
        //.fail() );
    console.log('ebin');
    res.send('k');
      };
    })
    //}
    .fail(function (reason) 
    {
     next(reason);
    });
  }
};

