const { check } = require('express-validator');

const validatePasswordConfirmation = (confirmPassword, { req }) => {
    const password = req.body.password;

    if (password !== confirmPassword) {
        throw new Error('パスワードが一致していません');
    }

    return true;
};

module.exports = [
    check('username').not().isEmpty().withMessage('必須項目です'),
    check('email').not().isEmpty().withMessage('必須項目です'),
    check('password').not().isEmpty().withMessage('必須項目です').isLength({ min: 7 }).withMessage('7文字以上で入力してください'),
    check('confirmPassword').not().isEmpty().withMessage('必須項目です')
    .bail()
    .custom(validatePasswordConfirmation)
];