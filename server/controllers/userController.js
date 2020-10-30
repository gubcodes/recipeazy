let express = require('express')
let router = express.Router();
let sequelize = require('../db');
let User = sequelize.import('../models/user');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');

/***************************************
 * REGISTER USER
***************************************/
router.post('/register', function (req, res) {
    let email = req.body.user.email;
    let pass = req.body.user.password;

    User.create({
        email: email,
        passwordhash: bcrypt.hashSync(pass, 10)
    })
    .then(
        function createSuccess(user) {
            let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});

            res.json({
                user: user,
                message: "new user created",
                sessionToken: token
            });
        },
        function createError(err) {
            res.send(500, err.message);
            console.log('--REGISTER USER ERROR--')
        }
    );
});

/***************************************
 * SIGN IN USER
***************************************/
router.post('/login', function(req, res) {
    User.findOne({ where: {email: req.body.user.email} })
    .then(
        function(user) {
            if (user) {
                bcrypt.compare(req.body.user.password, user.passwordhash, function (err, matches) {
                    if (matches) {
                        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24 });
                        res.json({
                            user: user,
                            message: "user successfully authenticated",
                            sessionToken: token
                        });
                    } else {
                        res.status(502).send({ error: "user sign in failed" });
                    }
                });
            } else {
                res.status(500).send({ error: "failed to authenticate" });
            }
        },
        function (err) {
            res.status(501).send({ error: "failed to sign in user" })
        }
    );
});

module.exports = router;