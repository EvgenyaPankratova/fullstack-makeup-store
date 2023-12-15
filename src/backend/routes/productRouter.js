const Router = require('express');
const router = new Router();
const productController = require('../controllers/productController');
const checkRole = require('../middleware/RoleMiddleWare');

router.post('/', checkRole('ADMIN'), productController.create) //создать
router.get('/', productController.getAll) //получить все
router.get('/:id', productController.getOne) //получить один по айди
router.delete('/:id', checkRole('ADMIN'), productController.deleteProduct) //удалить продукт по айди

module.exports = router;