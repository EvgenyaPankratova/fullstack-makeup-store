const ApiError = require('../error/ApiError');

class UserController {
    async registration(req, res){

    }
    async login(req, res){

    }
    async checkAutorisation(req, res, next){
       const {id} = req.query;
       if(!id){
            return next(ApiError.BadRequest('ID не найден'));
       }
       res.json(id)
    }
    async deleteUser(req, res){

    }
}

module.exports = new UserController();