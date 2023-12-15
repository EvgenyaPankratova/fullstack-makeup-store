const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Basket} = require('../models/models');


const generateJwt = (id, email, role) => {
    //3 параметра: центральная часть с вшитыми данными, серетный ключ, срок жизни токена
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '48h'}
    )
}

class UserController {
    async registration(req, res, next){
        const {email, password, role} = req.body;
        if(!email || !password){
            return next(ApiError.BadRequest("Некорректный email или пароль"))
        }
        const checkUser = await User.findOne({where: {email}});
        if(checkUser){
            return next(ApiError.BadRequest("Пользователь с таким email уже зарегистрирован"))
        }
        //хэшируем пароль с помощью bcrypt. Вторым параметром указываем, сколько раз хэшируем
        const hashPassword = await bcrypt.hash(password, 5);
        const newUser = User.create({email, role, password: hashPassword});
        const basket = await Basket.create({userId: newUser.id});

        
        const jsonwebtoken = generateJwt(newUser.id, newUser.email, newUser.role)
        return res.json({jsonwebtoken})
    }
    async login(req, res, next){
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}})
        if(!user){
            return next(ApiError.BadRequest('Пользователь с таким email не найден'))
        }
        //сравним пароль, который ввёл пользователь, с захэшированным их базы данных
        let comparePassword = bcrypt.compareSync(password, user.password);
        if(!comparePassword){
            return next(ApiError.BadRequest('Неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token})
    }
    async checkAutorisation(req, res, next){
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({token})
    }
    async deleteUser(req, res){

    }
}

module.exports = new UserController();