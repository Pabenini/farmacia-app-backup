//npm install --save sequelize
const Sequelize = require('sequelize');
//Conexão com arquivo db que possui a conexão com o banco
const db = require('./db');
//Constante Usuário recebe a Table users
//https://sequelize.org/v6/manual/model-basics.html
const remedio = db.define('remedio',{
    rem_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    rem_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    rem_description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    rem_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
    rem_stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});
//https://sequelize.org/v6/manual/model-basics.html#model-synchronization
//O user.sync() - verifica se a tabela existe, caso não exista, será criada
usuario.sync();
//user.sync({ alter: true }); //Para fazer alteração na estrutura caso exista
module.exports = remedio;