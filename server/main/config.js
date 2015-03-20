"use strict";

var mongoose    = require('mongoose'),
    morgan      = require('morgan'),
    bodyParser  = require('body-parser'),
    middle      = require('./middleware');

  var bonus = require('../bonus/bonus_controller.js');
  var guild = require('../guild/guild_controllers.js');

mongoose.connect(process.env.DB_URL || 'mongodb://localhost/titeenilaarnio');
/*
 * Include all your global env variables here.
*/
module.exports = exports = function (app, express, routers) {
  app.set('port', process.env.PORT || 9000);
  app.set('base url', process.env.URL || 'http://localhost');
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(middle.cors);
  app.use(express.static(__dirname + '/../../client'));


//  app.route('/api/guilds').get(function (req, res){
//    res.send('guilds');
//  });

  app.route('/api/guilds').get(guild.get);

  app.route('/api/bonus').post(bonus.post);

//  app.use('/api/guilds', routers.Router);
//  app.use('/api/bonus', routers.Router);
 

  app.use(middle.logError);
  app.use(middle.handleError);
};