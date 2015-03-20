//tämä on masi.js

'use strict'
var guildShortNames = [ 'tite', 'digit', 'otit', 'tik', 'cluster' ];
var competitions = [ 'mic', 'irc', 'cw', 'jukka', 'robo', 'hw', 'bonus' ];
var mongoose = require('mongoose');
var guildmodel = require('./server/guild/guild_model.js');
var codemodel = require('./server/bonus/bonus_model.js');
var _ = require('lodash');
var Q = require('q');

var Guild = mongoose.model('guilds');
var Bonus = mongoose.model('bonuscodes');

var db = mongoose.connect('mongodb://localhost/titeenilaarnio');

var city = process.argv[2];
var compo = process.argv[3];
var howMuch = process.argv[4];

var ebin = Q.when( console.log('-== Masin iki oma skripta ==- ') )
.then( function()
{
	console.log('');
	if ( _.includes(guildShortNames, city) )
	{

		if (_.includes(competitions, compo))
		{
			var addScores = Q.when(Guild.findOne({shortName: city}).exec());
			addScores.then(function(guild)
			{
				var koita = Q.when(guild.update({ $push: { scores: { score: howMuch , competition: compo } } } ).exec() );
				koita.then(function (juuh)
				{
					console.log('lisäys onnistui');

				})
				.fail( function (err)
				{

					console.log('Jotain meni vituiks, koita uudestaan. Alla virheviesti');
					console.log(err);
				}).done();
			})
			.fail( function(err)
			{
				console.log('Jotain meni vituiks, koita uudestaan. Alla virheviesti');
				console.log(err);
			})
			.done();
		}
		else
		{
			console.log('nyt meni kilpailu väärin');
		};

	}
	else if( city == 'apuva')
	{

		console.log('APUVA APUVA AAPUUVA');
		console.log('');
		console.log('Kaupungit: digit, tite, otit, cluster, tik');
		console.log('Kisat: mic, irc, cw, jukka, robo, hw, bonus');
		console.log('');
		console.log('Pisteiden syöttäminen: aja "node masi.js kaupunki kisa pisteet"');
		console.log('Pisteiden ja koodien nollaaminen: aja "node masi.js tiputa"');
		console.log('Syötitkö jotkut pisteet väärin? aja sama lisäys negatiivisena');
		console.log('Populointilaarnion ajo: "node populointilaarnio.js"');

	}
	else if ( city == 'tiputa' )
	{
		if( compo == "Koistinen") 
		{
			Guild.remove({},function(err){});
			Bonus.remove({},function(err){});
			console.log('Olet nyt dropannut koko tietokannan. Sinne meni pistetilastot ja koodit nollautu');
			console.log('Aja nyt populointilaarnio');
		}
		else
		{
			console.log('PUTOUS');
			console.log('Tämä droppaa koko pistetilastokannan, joten toivottavasti tiedät mitä teet');
			console.log('Jos nyt olet ihan varma, aja "node masi.js tiputa Koistinen" ');
			console.log('Aja sen jälkeen populointilaarnio');
		}
	}
	else
	{
		console.log('Pisin vittuja syötetty, skarppaa Masi.');
		console.log('koita ajaa vaikka "node masi.js apuva" ');

	};
})
//.fail(function(err){console.log(err)})
.then(function()
{	setTimeout(function() {
  process.exit(1);
}, 1000);
	;
});


