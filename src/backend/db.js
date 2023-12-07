require('dotenv').config({ path: 'src/backend/.env' }); //для чтения env файла

const {Sequelize} = require('sequelize');

module.exports = new Sequelize( // определяем объект Sequelize
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: "postgres",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    }
)