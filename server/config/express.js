var morgan = require('morgan'),
    express = require('express'),
    fav = require('serve-favicon'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    cookieParser = require('cookie-parser');

module.exports = function (app, config) {
    //jade
    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'jade');

    //body parser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    //session and cookies
    app.use(cookieParser());

    var sess = {
        secret: config.secret,
        resave:false,
        saveUninitialized: false
    };
    if (config.env === 'production') {
        app.set('trust proxy', 1); // trust first proxy
        sess.cookie.secure = true; // serve secure cookies
    }
    app.use(session(sess));

    //errorHandler
    if (config.env === 'development') {
        // only use in development
        app.use(errorHandler({log:true}));
    }

    //static
    app.use(express.static(config.rootPath + '/public'));

    app.use(fav(config.rootPath + '/public/favicon/favicon.ico'));
};