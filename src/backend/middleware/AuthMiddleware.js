const jwt = require('jsonwebtoken');
require('dotenv').config();

//здесь декодируем токен и проверяем на валидность

module.exports = function (req, res, next){
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
        req.user = decoded;
        next()
    } 
    catch(e){
        res.status(401).json({message: 'авторизация не удалась'})
    }
}