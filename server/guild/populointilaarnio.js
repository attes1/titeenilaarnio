// run with "node populointilaarnio.js"
"use strict";

var mongoose = require('mongoose');
var guildmodel = require('./guild_model.js');
var codemodel = require('../bonus/bonus_model.js');

var Guild = mongoose.model('guilds');
var Code = mongoose.model('bonuscodes');

var db = mongoose.connect('mongodb://localhost/titeenilaarnio');

//killat

var tik = new Guild({
	shortName: 'tik',
	fullName: 'Tietokilta ry'
});

var tite = new Guild({
	shortName: 'tite',
	fullName: 'Tampereen TietoTeekkarikilta'
	
});

var otit = new Guild({
	shortName: 'otit',
	fullName: 'Oulun Tietoteekkarit ry'
	//scores: basescores,
	
});

var cluster = new Guild({
	shortName: 'cluster',
	fullName: 'Cluster ry'
	//scores: basescores,
	
});

var digit = new Guild({
	shortName: 'digit',
	fullName: 'Digit ry'
	//scores: basescores,
	
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

//koodit

var koodi1 = new Code({ qrCode: '7UkSWA=='});
var koodi3 = new Code({ qrCode: '9VINjw=='});
var koodi4 = new Code({ qrCode: 'aOEJRQ=='});
var koodi5 = new Code({ qrCode: 'ARoTsw=='});
var koodi6 = new Code({ qrCode: 'LxEN3A=='});
var koodi7 = new Code({ qrCode: 'qtkKdQ=='});
var koodi8 = new Code({ qrCode: 'SdcQEw=='});
var koodi9 = new Code({ qrCode: 'YQ0IZA=='});
var koodi2 = new Code({ qrCode: 'ZLAIOg=='});
koodi1.save(function (err) {
	if (err) throw err;
	console.log("koodi1")
});

koodi2.save(function (err) {
	if (err) throw err;
	console.log("koodi2")
});
koodi3.save(function (err) {
	if (err) throw err;
	console.log("koodi3")
});
koodi4.save(function (err) {
	if (err) throw err;
	console.log("koodi4")
});
koodi5.save(function (err) {
	if (err) throw err;
	console.log("koodi5")
});
koodi6.save(function (err) {
	if (err) throw err;
	console.log("koodi6")
});
koodi7.save(function (err) {
	if (err) throw err;
	console.log("koodi7")
});
koodi9.save(function (err) {
	if (err) throw err;
	console.log("koodi8")
});
koodi8.save(function (err) {
	if (err) throw err;
	console.log("koodi8")
});