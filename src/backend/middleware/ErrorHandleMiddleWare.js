const ApiError = require('../error/ApiError.js');

//вызов функции next создаст переход к следующему в цепочке midleware
module.exports = function (error, req, res, next) {
    if(error instanceof ApiError){
        return res.status(error.status).json({message: error.message})
    }
    return res.status(500).json({message: "неизвестная ошибка"})
}

