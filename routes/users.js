const express = require('express');
const router = express.Router();

router.get('/signin', (req, res) => {
  res.render('signin');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signin', (req, res) => {
  //サインイン処理

  //Appのルートに戻る（仮)
  res.render('index');
});

router.post('/signup', (req, res) => {
  //サインアップ処理

  //Appのルートに戻る（仮)
  res.render('index');
});


module.exports = router;
