// run with "node populointilaarnio.js"
"use strict";

var mongoose = require('mongoose');
var guildmodel = require('./guild_model.js');

var Guild = mongoose.model('guilds');

var db = mongoose.connect('mongodb://localhost/titeenilaarnio');

var basescores =
[
	{
		score: 0,
		competition: 'mic',
		bonuscode: 'ebin'
	},
	{
		score: 0,
		competition: 'irc',
		bonuscode: 'ebin'
	},
	{
		score: 0,
		competition: 'cw',
		bonuscode: 'ebin'
	},
	{
		score: 0,
		competition: 'jukka',
		bonuscode: 'ebin'
	},
	{
		score: 0,
		competition: 'robo',
		bonuscode: 'ebin'
	},
	{
		score: 0,
		competition: 'hw',
		bonuscode: 'ebin'
	},
	{
		score: 0,
		competition: 'bonus',
		bonuscode: 'ebin'
	},
]

var tik = new Guild({
	shortName: 'tik',
	fullName: 'Tietokilta',
	scores: basescores,
	
});

var tite = new Guild({
	shortName: 'tite',
	fullName: 'Tampereen Tietoteekkarikilta',
	scores: basescores,
	
});

var otit = new Guild({
	shortName: 'otit',
	fullName: 'Oulun Tietoteekkarit',
	scores: basescores,
	
});

var cluster = new Guild({
	shortName: 'cluster',
	fullName: 'Cluster Ry',
	scores: basescores,
	
});

var digit = new Guild({
	shortName: 'digit',
	fullName: 'Digit Ry',
	scores: basescores,
	
});

tik.save(function (err) {
	if (err) throw err;
	console.log("tik")
});

tite.save(function (err) {
	if (err) throw err;
	console.log("tite")
});

digit.save(function (err) {
	if (err) throw err;
	console.log("digit")
});

cluster.save(function (err) {
	if (err) throw err;
	console.log("cluster")
});

otit.save(function (err) {
	if (err) throw err;
	console.log("otit")
});