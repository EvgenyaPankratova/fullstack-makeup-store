const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController.js')
const authMiddleware = require('../middleware/AuthMiddleware.js')

router.post('/registration', userController.registration) //регистрация
router.post('/login', userController.login) //авторизация
router.get('/autorisation', authMiddleware, userController.checkAutorisation) //авторизован ли
router.get('/del',  userController.deleteUser) 

module.exports = router;