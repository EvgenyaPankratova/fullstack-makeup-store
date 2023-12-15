const Router = require('express');
const router = new Router();
const typeController = require('../controllers/typeController');
const checkRole = require('../middleware/RoleMiddleWare');

router.post('/', checkRole('ADMIN'), typeController.create) //создать
router.get('/', typeController.getAll) //получить все


module.exports = router;