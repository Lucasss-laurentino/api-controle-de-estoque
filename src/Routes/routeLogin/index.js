const express = require('express');
const LoginController = require('../../Controllers/LoginController');

const router = express.Router();

router.get('/', (req, res) => {
    return res.send('ola mundo')
})

router.post('/criar_usuario', LoginController.criar_usuario);

router.post('/login', LoginController.login);

module.exports = router;