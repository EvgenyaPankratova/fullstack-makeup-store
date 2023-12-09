const Router = require('express');
const router = new Router();
const typeController = require('../controllers/typeController');

router.post('/', typeController.create) //создать
router.get('/', typeController.getAll) //получить все
router.delete('/', typeController.deleteType) //удалить

module.exports = router;