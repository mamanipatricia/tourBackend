var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors'); //added

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var rolesRouter = require('./routes/roles');
var cityTourRouter = require('./routes/cities');
var loginRouter = require('./routes/login');

var app = express();

app.use(logger('dev'));
app.use(cors());// added

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// my routes
app.use('/users', usersRouter);
app.use('/roles', rolesRouter);
app.use('/city-tour', cityTourRouter);
app.use('/auth', loginRouter);



module.exports = app;
