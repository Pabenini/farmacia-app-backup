// https://sequelize.org/docs/v6/getting-started/
// -> Comando: npm install --save sequelize
const Sequelize = require('sequelize');
//Credenciais
//o timestamps: false impede que o sequelize crie os campos de data de edição nas tabelas
const sequelize = new Sequelize('pharmacy_mysql', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    define: {
        timestamps: false
    }
});

//https://sequelize.org/docs/v6/getting-started
sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados realizada com sucesso.");
}).catch(function(){
    console.log("Erro ao conectar ao banco de dados.");
});

module.exports = sequelize;