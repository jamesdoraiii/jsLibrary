const Sequelize = require('sequelize');

const sequelize = new Sequelize('bluefinalproject', 'postgres', 'password', {
    host: 'localhost', 
    dialect: 'postgres'  
});

sequelize.authenticate().then(
    function() { 
        console.log('Connected to bluefinalproject postgres database');
    },
    function(err){ 
        console.log(err);
    }
);
                 
module.exports = sequelize;