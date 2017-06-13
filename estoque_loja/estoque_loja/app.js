const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const passport = require('passport');
const flash = require('connect-flash');
const path = require('path');
const bodyParser = require('body-parser');
const configDB = require('./config/db.js');
const http = require('http').Server(app);
const io = require('socket.io')(http);

require('./app/controller/login')(passport);

app.configure(() => {
  app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  app.set('view engine', 'ejs');

  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.session({secret: 'secretmessageteste'}));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
  app.use(function(req, res, next ) {
    if (req.query._method == 'DELETE' || req.body._method == 'DELETE') {
      req.method = 'DELETE';
      req.url = req.path;
    } else if (req.query._method == 'PATCH' || req.body._method == 'PATCH') {
      req.method = 'PATCH';
      req.url = req.path;
    }
    next();
  });
});
require('./app/routes.js')(app, passport);

app.use(function(req, res, next) {
  res.status(404).render('404.ejs');
});

app.set('io', io);

http.listen(port);
console.log('Sistema online na porta: ' + port);
