require ("dotenv").config()
var express = require('express'); 
var app = express(); 
var user = require('./controllers/usercontroller');
var post = require('./controllers/postcontroller');
var comment = require('./controllers/commentcontroller');
var sequelize = require('./db');
var bodyParser = require('body-parser');
app.use(require('./middleware/headers'));


sequelize.sync(); //use {force: true} to reset tables if necessary

app.use(bodyParser.json());

app.use('/user', user);



/*************************
 * PROTECTED ROUTES BELOW
**************************/

app.use(require('./middleware/validate-session'));
app.use('/post', post);


app.use('/comment', comment);

app.listen(process.env.PORT, function(){
    console.log(`App is listening on ${process.env.PORT}`)
});

