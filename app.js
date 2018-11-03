var express = require('express'); // require looks in node_modules
var app = express();

var path = require('path');

var index = require('./route/index');
var auth = require('./route/auth');
var users = require('./route/users');


app.use('/', index)
app.use('/auth', auth); //for all requests with /auth, use the module auth
app.use('/users', users);
app.use(express.static(path.join(__dirname, 'public'))); //set public folder

app.listen(3000, () => { console.log('server started!')  }); // makes the app listen to the port