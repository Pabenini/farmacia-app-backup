const express = require('express'); //Importa o módulo express.
const app = express(); //Cria uma instância do express.
const port = 4000; //Define a porta que o servidor irá escutar.
/* Instalação do cors para permitir acesso a api -
CORS (Cross-Origin Resource Sharing):
permitir solicitações cross-origin. Adicionando cabeçalhos CORS à resposta do servidor.
No Node.js pode usar o pacote cors para configurar
    npm install --save cors
*/
var cors = require('cors')
/*
 * Configuração do middleware Express.js para habilitar o CORS (Cross-Origin Resource Sharing)
 * em uma aplicação Node.js 
 */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});
//Conexão com o cadastro.js
// const cadastro = require('./models/cadastro.js');
// const remedio = require('./models/remedios.js');

//A linha abaixo permitirá requisições do body para o POST
app.use(express.json());

/*
ROTAS COM BANCO DE DADOS
*/

//http://localhost:4000
app.get('/', (req, res) => { 
    res.send('Rota Inicial do Projeto'); 
}); //Cria uma rota que responde a requisições GET na raiz do projeto.

//http://localhost:4000/bemvindo
app.get("/bemvindo",(req,res) => {
    res.send("Bem vindo Desenvolvedor");
});

//Retorno com json
//http://localhost:4000/json
app.get("/json", function (req, res) {
    return res.json({
    course: 'Node Js',
    title: 'Desenvolvimento de API',
    description: 'Aprenda a desenvolver uma API com Node Js',
    date: '2024-07-20'
    })
});

//http://localhost:4000/curso?nome=Javascript
//mostra que o curso é Javascript
app.get("/curso", function (req, res) {
    let nome = req.query.nome;
    return res.json({ curso: `Aprendendo ${nome}` });
});

//http://localhost:4000/turma/2
//mostra qual é a segunda turma 
app.get("/turma/:id", function (req, res) {
    let id = req.params.id;
    return res.json({ turma: `Turma: ${id}` });
});

//http://localhost:4000/contato/5?sit=ativo
//mostra que o contato está ativo
app.get("/contato/:id", function (req, res) {
    let id = req.params.id;
    let sit = req.query.sit;
  return res.json({ id, sit, nome: 'Nelci', email: 'professornelcimariano@gmail.com' });
});

let cursos = ['Node JS', 'Javascript', 'React'];
//http://localhost:4000/cursos/1
//mostra os cursos da variavel let cursos
//1 = javascript
app.get("/cursos/:index", function (req, res) {
  const {index} = req.params;
  return res.json(cursos[index]);
});

//http://localhost:4000/cursos
//mostra todos os cursos
app.get("/cursos", function (req, res) {
    return res.json(cursos);
});

app.post('/cursos', (req, res) => {
    const {name} = req.body;
    cursos.push(name)
    // Retorno dos dados via json
    return res.json(cursos);
});

app.put('/cursos/:index', (req, res) => {
    const {index} = req.params;
    const {name} = req.body;
    cursos[index] = name;
    return res.json(cursos);
});

app.delete('/cursos/:index', (req, res) => {
    const {index} = req.params;
    cursos.splice(index, 1);
    return res.json(cursos);
});


//Requisição com axios

const path = require('path'); //Configuração para acessar o arquivo products.json
const axios = require('axios');
const { sourceMapsEnabled } = require('process');
//Servindo arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public'))); ///Configuração para acessar o arquivo

//npm install axios
//crie a const axios na parte de cima -> const axios = require('axios');
//http://localhost:4000/produtos
app.get("/products", function (req, res) {
    axios.get('http://localhost:4000/products.json')
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            res.status(500).send('Erro ao ler o arquivo');
        });
});

app.get("/products/:id", function (req, res) {
  axios.get('http://localhost:'+port+'/products.json')
    .then(response => {
        const listProduct = response.data.listProduct;
        const id = req.params.id;
        const product = listProduct.find(product => product.id == id);
        res.json(product);
    })
    .catch(error => {
        res.status(500).send('Erro ao ler o arquivo');
    });
});



app.listen(port, () => { 
    console.log('Servidor Iniciado na porta'); 
}); //Inicia o servidor na porta definida.
