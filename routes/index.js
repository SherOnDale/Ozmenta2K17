var express = require('express');
var router = express.Router();
const User = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/registerUser', (req, res, next) => {
  const user = new User({
    fName: req.body.fName,
    lName: req.body.lName,
    email: req.body.email,
    phno: req.body.phno,
    password: req.body.password
  });
  user.save((err) => {
    if(err) {
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

router.post('/loginUser', (req, res, next) => {
  console.log(req.body.email, req.body.password);
  User.findOne({email: req.body.email,
                password: req.body.password}, (err, doc) => {
    if(err) {
      console.log('There is an error');
      return res.status(500).json({
        message: 'Unable to log you in. Please try again later',
        error: err
      });
    }
    console.log('There is not an error');
    res.status(201).json({
      message: 'Successfully logged in',
      obj: doc
    });
  });
});

module.exports = router;
