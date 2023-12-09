const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController.js')

router.post('/registration', userController.registration) //регистрация
router.post('/login', userController.login) //авторизация
router.get('/autorisation', userController.checkAutorisation) //авторизован ли
router.get('/del', userController.deleteUser) 

module.exports = router;