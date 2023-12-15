const uuid = require('uuid'); //для генерации id
const path = require('path');
const {Product, ProductInfo} = require('../models/models');
const ApiError = require('../error/ApiError');

class ProductController {
    async create(req, res, next){
        try{
            let {name, price, brandId, typeId, info} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + '.jpg'; //генерация на случайных числах
            img.mv(path.resolve(__dirname, '..', 'static', fileName)); // функеция mv укажет, что мы хотим переместить файл послуе полученимя в папку по пути: __dirname это путь до этого файла, .. выходим из папки на уровень выше, заходим в папку static
            const product = await Product.create({name, price, brandId, typeId, img: fileName});
            
            if(info){
                info = JSON.parse(info)
                info.forEach(elem => 
                    ProductInfo.create({
                        title: elem.title,
                        description: elem.description,
                        productId: product.id

                    })
                    )
            }
            
            

            return res.json(product)
        }
        catch (err){
            next(ApiError.BadRequest(err.message));
        }
        
    }
    async getAll(req, res){
        let {brandId, typeId, limit, page} = req.query
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit; //отступ
        let products;
        if(!brandId && !typeId){
            products = await Product.findAndCountAll({limit, offset}); //findAndCountAll нужен именно для постраничной пагинации, подсчёт в поле count
        }
        if(brandId && !typeId){
            products = await Product.findAndCountAll({where: {brandId}, limit, offset});

        }
        if(!brandId && typeId){
            products = await Product.findAndCountAll({where: {typeId}, limit, offset});
        }
        if(brandId && typeId){
            products = await Product.findAndCountAll({where: {typeId, brandId}, limit, offset});
        }
        return res.json(products)
    }

    async getOne(req, res){
        const {id} = req.params;
        const product = await Product.findOne({
            where: {id},
            include: [{model: ProductInfo, as: 'info'}] // получаем массив зависимостей, указываем модель и название поля которые хотим подгрузить
        })
        return res.json(product);
    }

    async deleteProduct(req, res){
        const {id} = req.params;
        const product = await Product.destroy({where: {id}});
        return res.json(product);
    }
}

module.exports = new ProductController();