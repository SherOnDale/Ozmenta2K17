var express = require('express');
var router = express.Router();
var User = require('../models/users');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});
router.post('/registerUser', function (req, res, next) {
    var user = new User({
        fName: req.body.fName,
        lName: req.body.lName,
        email: req.body.email,
        phno: req.body.phno,
        password: bcrypt.hashSync(req.body.password, 10)
    });
    user.save(function (err) {
        if (err) {
            return res.status(500).json({
                message: 'An error occurred. Please try again later',
                error: err
            });
        }
        res.status(201).json({
            message: 'Successfully registered',
            obj: user
        });
    });
});
router.post('/loginUser', function (req, res, next) {
    User.findOne({ email: req.body.email }, function (err, doc) {
        if (err) {
            return res.status(500).json({
                message: 'Unable to log you in. Please try again later',
                error: err
            });
        }
        if (!doc) {
            return res.status(401).json({
                message: 'Unable to log you in . Please try again later'
            });
        }
        if (!bcrypt.compareSync(req.body.password, doc.password)) {
            return res.status(401).json({
                message: 'Unable to log you in . Please try again later'
            });
        }
        var token = jwt.sign({
            user: doc.email
        }, 'ozmenta2k17velammalengineeringcollege', {
            expiresIn: 3600
        });
        res.status(201).json({
            message: 'Successfully logged in',
            token: token,
            userId: doc._id
        });
    });
});
module.exports = router;
