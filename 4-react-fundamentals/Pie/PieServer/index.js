
require('dotenv').config()
const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
const pies = require('./controllers/piecontroller');
const user = require('./controllers/userController');


db.sync();

app.use(require('./middleware/headers'));

app.use(bodyParser.json());
app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}.`));

app.use(express.static(__dirname + '/public'));
app.use('/pies', pies);
app.use('/auth', user);







