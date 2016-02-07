'use strict';
var mongoose = require('mongoose');

module.exports = function (config) {
    mongoose.connect(config.db);

    var db = mongoose.connection;

    db.on('error', function () {
        console.error.bind(console, 'connection error ... ');
    });

    db.once('open', function callback() {
        console.log('connection open on ' + config.db);
    });
};