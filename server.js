'use strict';

var express = require('express');

//env setup and app
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();

//configurations
var config = require('./server/config/config')[env];

//configure express
require('./server/config/express')(app, config);

//configure mongoose
require('./server/config/mongoose')(config);

//configure routes
require('./server/routes/router')(app);

//configure listener
require('./server/config/listen')(app, config);