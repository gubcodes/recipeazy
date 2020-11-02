const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
});

sequelize.authenticate().then(
    function() {
        console.log('connected to recipeazy heroku postgres database');
    },
    function(err) {
        console.log(err);
        console.log('--DB.JS AUTHENTICATE ERROR--')
    }
);

module.exports = sequelize;