//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
var express = require('express');
var router = express.Router();
var User = require('../models/users');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var options = {
    auth: {
        api_user: 'SherOnDale13',
        api_key: 'temppassword69'
    }
};
var client = nodemailer.createTransport(sgTransport(options));
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});
router.post('/registerUser', function (req, res, next) {
    var token = jwt.sign({
        user: user.email
    }, 'ozmenta2k17velammalengineeringcollege');
    var user = new User({
        fName: req.body.fName,
        lName: req.body.lName,
        email: req.body.email,
        phno: req.body.phno,
        password: bcrypt.hashSync(req.body.password, 10),
        token: token
    });
    user.save(function (err) {
        if (err) {
            return res.status(500).json({
                message: 'An error occurred. Please try again later',
                error: err
            });
        }
        var email = {
            from: 'awesome@bar.com',
            to: 'mr.walrus@foo.com',
            subject: 'Hello',
            text: 'Hello world',
            html: '<b>Hello world</b>'
        };
        client.sendMail(email, function (err, info) {
            if (err) {
                console.log(error);
            }
            else {
                console.log('Message sent: ' + info.response);
            }
        });
        var email = {
            from: 'support@ozmenta2k17.com',
            to: user.email,
            subject: 'Ozmenta2K17 Account Activation Link',
            text: "Hello " + user.fName + " " + user.lName + ", Thank you for registering at Ozmenta2K17.com. Please click on the following link to complete your registration: http://www.ozmenta2k17.com/activate/" + user.token,
            html: "Hello <strong>" + user.fName + " " + user.lName + "</strong>, Thank you for registering at Ozmenta2K17.com. Please click on the link below to complete your registration:<br></br><a href=\"http://www.ozmenta2k17.com/acti.com",
            to: user.email,
            subject: 'Ozmenta2K17 Account Activation Link',
            text: "Hello " + user.fName + " " + user.lName + ", Thank you for registering at Ozmenta2K17.com. Please click on the following link to complete your registration: http://www.ozmenta2k17.com/activate/" + user.token,
            html: "Hello <strong>" + user.fName + " " + user.lName + "</strong>, Thank you for registering at Ozmenta2K17.com. Please click on the link below to complete your registration:<br></br><a href=\"http://www.ozmenta2k17.com/activate/" + user.token + "\">http://www,ozmenta2k17.com/activate</a>"
        };
        client.sendMail(email, function (err, info) {
            if (err) {
                console.log(error);
            }
            else {
                console.log('Message sent: ' + info.response);
            }
        });
        res.status(201).json({
            message: 'Email verification sent',
            token: token,
            userId: user.email
        });
    });
});
router.post('/loginUser', function (req, res, next) {
    User.findOne({
        email: req.body.email
    }, function (err, doc) {
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
            userId: doc.email
        });
    });
});
router.post('/activateUser', function (req, res, next) {
    User.findOne({
        token: req.body.token
    }, function (err, doc) {
        if (err) {
            return res.status(500);
        }
        else if (!doc) {
            return res.status(401);
        }
        doc.active = true;
        doc.save(function (err) {
            if (err)
                return res.status(500);
            var email = {
                from: 'support@ozmenta2k17.com',
                to: doc.email,
                subject: 'Ozmenta2K17 Account Successfully Activated',
                text: "Hello " + user.fName + " " + user.lName + ", Thank you for registering at Ozmenta2K17.com. Your account has been successfully activated",
                html: "Hello <strong>" + user.fName + " " + user.lName + "</strong>, Thank you for registering at Ozmenta2K17.com. Your account has been successfylly activated",
            };
            client.sendMail(email, function (err, info) {
                if (err) {
                    console.log(error);
                }
                else {
                    console.log('Message sent: ' + info.response);
                }
            });
        });
        return res.status(200);
    });
});
module.exports = router;
