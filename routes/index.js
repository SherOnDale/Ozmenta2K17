//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
//client id -  365217442910-3qfi84kavgkdbcr3quqc21tv523tlmho.apps.googleusercontent.com 
//client secret -  IBkkls4UIR3VIilvDzkiFuLH 
var express = require('express');
var router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

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


router.post('/registerUser', (req, res, next) => {
  const token = jwt.sign({
    user: req.body.email
  }, 'ozmenta2k17velammalengineeringcollege');
  const user = new User({
    fName: req.body.fName,
    lName: req.body.lName,
    email: req.body.email,
    phno: req.body.phno,
    password: bcrypt.hashSync(req.body.password, 10),
    token: token
  });
  user.save((err) => {
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
      text: `Hello ${user.fName} ${user.lName}, Thank you for registering at Ozmenta2K17.com. Please click on the following link to complete your registration: http://www.ozmenta2k17.com/activate/${user.token}`,
      html: `Hello <strong>${user.fName} ${user.lName}</strong>, Thank you for registering at Ozmenta2K17.com. Please click on the link below to complete your registration:<br></br><a href="http://www.ozmenta2k17.com/activate/${user.token}">http://www,ozmenta2k17.com/activate</a>`
    };

    transport.sendMail(email, (error, response) => {
    if(error){
        console.log(error);
    }else{
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

router.post('/loginUser', (req, res, next) => {
  User.findOne({
    email: req.body.email
  }, (err, doc) => {
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
    if(doc.active == false) {
      return res.status(401).json({
        message: 'Unable to log you in. Please try again later'
      })
    }
    res.status(201).json({
      message: 'Successfully logged in',
      token: doc.token,
      userId: doc.email
    });
  });
});

 router.post('/activateUser', (req, res, next) => {
   User.findOne({
     token: req.body.token
   }, (err, doc) => {
     if (err) {
       return res.status(500);
     } else if (!doc) {
       return res.status(401);
     }
      console.log(doc);
     doc.active = true;
     doc.save((err) => {
       if (err)
         return res.status(500);
       var email = {
         from: 'support@ozmenta2k17.com',
         to: doc.email,
         subject: 'Ozmenta2K17 Account Successfully Activated',
         text: `Hello ${doc.fName} ${doc.lName}, Thank you for registering at Ozmenta2K17.com. Your account has been successfully activated`,
         html: `Hello <strong>${doc.fName} ${doc.lName}</strong>, Thank you for registering at Ozmenta2K17.com. Your account has been successfylly activated`,
       };
     transport.sendMail(email, function(error, response){
     if(error){
         console.log(error);
     }else{
         console.log("Message sent: " + response);
     }
     });
     return res.status(200);
   });
   });
 });

 router.post('/registerEvent', (req, res, next) => {
   console.log(req.body);
  User.findOne({
    token: req.body.token
  }, (err, doc) => {
     if (err) {
       return res.status(500);
     } else if (!doc) {
       return res.status(401);
     }
      console.log(doc);
      doc.eventsRegistered[req.body.eventId] = true;
     doc.save((err) => {
       if (err)
         return res.status(500);
     return res.status(200).json({
       message: 'Successfully Registered'
     });
   });
  })
 })

module.exports = router;