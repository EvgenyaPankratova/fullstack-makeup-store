const jwt = require('jsonwebtoken');
require('dotenv').config();

//здесь проверяем роль пользователя. чтобы только администатор мог добавлять товары и т.д.

module.exports = function (role){
    return function (req, res, next){
        if(req.method === 'OPTIONS'){
            next();
        }
        
        try{ 
            const token = req.headers.autorisation.split(' ')[1] //два слова слеплены: bearer + gfdgdfghgfh(токен). Нам нужно только второе слово-токен
            if(!token){
                return res.status(401).json({message: 'авторизация не удалась'})
            }
            //если токен есть, раскодируем его
            const decoded = jwt.verify(token, process.env.SECRET_KEY);

            //отличие от авторизации: проверяем роль пользователя
            if(decoded.role !== role){
                return res.status(403).json({message: 'Нет доступа'})
            }


            req.user = decoded;
            next()
        } 
        catch(e){
            res.status(401).json({message: 'авторизация не удалась'})
        }
    }
}

