//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
//client id -  365217442910-3qfi84kavgkdbcr3quqc21tv523tlmho.apps.googleusercontent.com 
//client secret -  IBkkls4UIR3VIilvDzkiFuLH 
var express = require('express');
var router = express.Router();
var User = require('../models/users');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var transport = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    tls: {
        rejectUnauthorized: false
    },
    auth: {
        user: 'ozmenta2k17@gmail.com',
        pass: 'TempPassword13'
    }
}));
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});
router.post('/registerUser', function (req, res, next) {
    var token = jwt.sign({
        user: req.body.email
    }, 'ozmenta2k17velammalengineeringcollege');
    var user = new User({
        fName: req.body.fName,
        lName: req.body.lName,
        cName: req.body.cName,
        degree: req.body.degree,
        dept: req.body.dept,
        year: req.body.year,
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
            from: 'support@ozmenta2k17.com',
            to: user.email,
            subject: 'Ozmenta2K17 Account Activation Link',
            text: "Hello " + user.fName + " " + user.lName + ", Thank you for registering at Ozmenta2K17.com. Please note that Rupees 100 should be paid on campus during the event as registration fee. Click on the following link to complete your registration: http://www.ozmenta2k17.com/activate/" + user.token,
            html: "Hello <strong>" + user.fName + " " + user.lName + "</strong>, Thank you for registering at Ozmenta2K17.com. Please note that Rupees 100 should be paid on campus during the event as registration fee. Click on the link below to complete your registration:<br></br><a href=\"http://www.ozmenta2k17.com/activate/" + user.token + "\">http://www,ozmenta2k17.com/activate</a>"
        };
        transport.sendMail(email, function (error, response) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("Message sent: " + response.message);
            }
            transport.close();
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
                message: 'Unable to log you in. Please try again later'
            });
        }
        if (!bcrypt.compareSync(req.body.password, doc.password)) {
            return res.status(401).json({
                message: 'Unable to log you in. Please try again later'
            });
        }
        if (doc.active == false) {
            return res.status(401).json({
                message: 'Unable to log you in. Please try again later'
            });
        }
        res.status(201).json({
            message: 'Successfully logged in',
            token: doc.token,
            userId: doc.email,
            eventsRegistered: doc.eventsRegistered
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
        console.log(doc);
        doc.active = true;
        doc.save(function (err) {
            if (err)
                return res.status(500);
            var email = {
                from: 'support@ozmenta2k17.com',
                to: doc.email,
                subject: 'Ozmenta2K17 Account Successfully Activated',
                text: "Hello " + doc.fName + " " + doc.lName + ", Thank you for registering at Ozmenta2K17.com. Your account has been successfully activated",
                html: "Hello <strong>" + doc.fName + " " + doc.lName + "</strong>, Thank you for registering at Ozmenta2K17.com. Your account has been successfylly activated",
            };
            transport.sendMail(email, function (error, response) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log("Message sent: " + response);
                }
            });
            return res.status(200);
        });
    });
});
router.post('/registerEvent', function (req, res, next) {
    console.log(req.body);
    User.findOne({
        token: req.body.token
    }, function (err, doc) {
        if (err) {
            return res.status(500);
        }
        else if (!doc) {
            return res.status(401);
        }
        console.log(doc);
        doc.eventsRegistered[req.body.eventId] = true;
        doc.save(function (err) {
            if (err)
                return res.status(500);
            return res.status(200).json({
                eventsRegistered: doc.eventsRegistered,
                message: 'Successfully Registered'
            });
        });
    });
});
router.post('/cancelEvent', function (req, res, next) {
    console.log(req.body);
    User.findOne({
        token: req.body.token
    }, function (err, doc) {
        if (err) {
            return res.status(500);
        }
        else if (!doc) {
            return res.status(401);
        }
        console.log(doc);
        doc.eventsRegistered[req.body.eventId] = false;
        doc.save(function (err) {
            if (err)
                return res.status(500);
            return res.status(200).json({
                eventsRegistered: doc.eventsRegistered,
                message: 'Your Registration Is Cancelled'
            });
        });
    });
});
module.exports = router;
