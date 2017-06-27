var express = require('express');
var router = express.Router();
const User = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/registerUser', (req, res, next) => {
  const user = new User({
    content: req.body.content
  });
  user.save((err, result) => {
    if(err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    res.status(201).json({
      message: 'Successfully registered',
      obj: result
    });
  });
})

module.exports = router;
