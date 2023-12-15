require('dotenv').config(); //для чтения env файла
const sequelize = require('./db.js');
const modules = require('./models/models.js');
const express = require('express');
const cors = require('cors'); 
const fileUpload = require('express-fileupload'); 
const router = require('./routes/index.js');
const path = require('path')

const app = express();
const PORT = process.env.PORT || 5000;

//yarn run dev

app.use(cors()) //во избежание ошибки корс при запросах
app.use(express.json()) //для парсинга формата json, чтобы не возникала ошибка
app.use(fileUpload({})) //для работы с файлами
app.use(express.static(path.resolve(__dirname, 'static'))) //во избежание ошибки для просмотра изображений
app.use('/api', router);

const start = async () => {
    try{
        await sequelize.authenticate(); //с помощью authenticate взаимодействуем с базой данных 
        await sequelize.sync(); //сверяем состояние базы данных с прописанной мной схемой
        app.listen(PORT, () => {
            console.log(`Example app listening on port ${PORT}`);
          })
    }
    catch(err){
        console.log(err)
    }
}

start();

