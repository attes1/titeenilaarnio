"use strict";

var mongoose = require('mongoose');

var guildShortNames = [ 'tite', 'digit', 'otit', 'tik', 'cluster','none' ];
var qrCodes = [ '7UkSWA==','9VINjw==','aOEJRQ==','ARoTsw==', 'LxEN3A==', 'qtkKdQ==', 'SdcQEw==', 'YQ0IZA==', 'ZLAIOg==' ];

var BonusSchema = new mongoose.Schema({
 
  qrCode:
  {
    type: String,
    enum: qrCodes,
    index: true
  },

  checked:
  {
    type: Boolean,
    default: false,
  },

});

module.exports = exports = mongoose.model('bonuscodes', BonusSchema);