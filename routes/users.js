const express = require('express');
const { validationResult } = require('express-validator')
const userSignupValidator = require('./validator/userSignupValidator')
const router = express.Router();

router.get('/signin', (req, res) => {
  res.render('signin');
});

router.get('/signup', (req, res) => {
  res.render('signup', {
    username: '',
    email: '',
    errorMessages: []
  })
});

router.post('/signin', (req, res) => {
  //サインイン処理

  //Appのルートに戻る（仮)
  res.render('signin');
});

const createParamToError = (errors) => {
  const paramToError = {};
  
  errors.forEach(error => {
    const errorMessage = error.msg;
    const param = error.param;

    if (param in paramToError) {
      paramToError[param].push(errorMessage);
    } else {
      paramToError[param] = [errorMessage];
    }
  });

  return paramToError;
};

router.post('/signup', userSignupValidator, (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render('signup', {
      username: req.body.username,
      email: req.body.email,
      errorMessages: createParamToError(errors.errors)
    })
  }

  //サインアップ処理
  const username = req.body.username;

  //Appのルートに戻る（仮)
  res.render('index', { username: username });
});


module.exports = router;
