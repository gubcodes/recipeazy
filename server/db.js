const Sequelize = require('sequelize');

const sequelize = new Sequelize('recipeazy', 'postgres', 'whatevenisapassword', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('connected to recipeazy local postgres database');
    },
    function(err) {
        console.log(err);
        console.log('--DB.JS AUTHENTICATE ERROR--')
    }
);

module.exports = sequelize;