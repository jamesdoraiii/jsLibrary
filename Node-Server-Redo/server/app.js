require('dotenv').config();

var express = require('express'); //1
var app = express(); //2
var test = require('./controllers/testcontroller')//1
var user = require('./controllers/usercontroller')
var sequelize = require('./db');
var bodyParser = require('body-parser');
app.use(require('./middleware/headers'));

sequelize.sync(); // tip: pass in {force: true} for resetting tables

app.use(bodyParser.json());


app.use('/test', test)


app.use('/api/user', user);

app.listen(3000, function(){
    console.log('App is listening on 3000.')
});