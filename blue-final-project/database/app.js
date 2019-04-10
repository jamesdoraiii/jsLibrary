var express = require('express'); 
var app = express(); 
var user = require('./controllers/usercontroller');
var post = require('./controllers/postcontroller');
var comment = require('./controllers/commentcontroller');
var sequelize = require('./db');
var bodyParser = require('body-parser');
app.use(require('./middleware/headers'));

sequelize.sync();

app.use(bodyParser.json());

app.use('/user', user);

app.use('/post', post);

app.use('/comment', comment);

app.listen(3008, function(){
    console.log('App is listening on 3008.')
});

