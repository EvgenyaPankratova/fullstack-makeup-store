const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const typeRouter = require('./typeRouter');
const brandRouter = require('./brandRouter');
const errorHandler = require('../middleware/ErrorHandleMiddleWare')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/product', productRouter)

//последний middleware с обработкой ошибок обязательно в конце
router.use(errorHandler)

module.exports = router;