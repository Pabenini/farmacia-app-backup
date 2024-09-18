const Sequelize = require('sequelize');
//Conexão com arquivo db que possui a conexão com o banco
const db = require('./db');
//Constante Usuário recebe a Table users
//https://sequelize.org/v6/manual/model-basics.html
const usuario = db.define('usuario',{
    usr_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    usr_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    usr_email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    usr_password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    usr_cel: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    usr_address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    usr_status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});
//https://sequelize.org/v6/manual/model-basics.html#model-synchronization
//O user.sync() - verifica se a tabela existe, caso não exista, será criada
usuario.sync();
//user.sync({ alter: true }); //Para fazer alteração na estrutura caso exista
module.exports = usuario;