require('dotenv').config();

let express = require('express');
let app = express();
let user = require('./controllers/userController');
let list = require('./controllers/listController');
let sequelize = require('./db');

sequelize.sync(); // tip: {force: true} for resetting tables

app.use(express.json());
app.use(require('./middleware/headers'));

/************************ 
 * EXPOSED ROUTES
 ************************/
app.use('/user', user);

app.use(require('./middleware/validateSession'));
 /************************ 
 * PROTECTED ROUTES
************************/
app.use('/list', list);

app.listen(process.env.PORT, () => {
    console.log(`--listening on ${process.env.PORT}--`)
})