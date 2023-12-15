const Router = require('express');
const router = new Router();
const brandController = require('../controllers/brandController');
const checkRole = require('../middleware/RoleMiddleWare');

router.post('/', checkRole('ADMIN'), brandController.create) //создать
router.get('/', brandController.getAll) //получить все
router.delete('/', checkRole('ADMIN'), brandController.deleteBrand) //удалить

module.exports = router;