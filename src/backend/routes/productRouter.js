const Router = require('express');
const router = new Router();
const productController = require('../controllers/productController');

router.post('/', productController.create) //создать
router.get('/', productController.getAll) //получить все
router.get('/:id', productController.getOne) //получить один по айди
router.delete('/', productController.deleteProduct) //удалить

module.exports = router;