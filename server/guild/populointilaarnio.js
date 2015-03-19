// run with "node populointilaarnio.js"
"use strict";

var mongoose = require('mongoose');
var guildmodel = require('./guild_model.js');

var Guild = mongoose.model('guilds');

var db = mongoose.connect('mongodb://localhost/titeenilaarnio');

var guild = new Guild({
	shortName: 'tite',
	fullName: 'Tampeen TietoTeekkarikilta',
	scores: 
	{
		score: 0,
		competition: 'mic'

	},
	bonuscode: 'ebin'
});

guild.save(function (err) {
	if (err) throw err;

	console.log('Kilta:');
	console.log(guild);
	console.log('Created successfully.');
});