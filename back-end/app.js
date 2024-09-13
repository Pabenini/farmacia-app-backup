const express = require('express'); //Importa o módulo express.
const app = express(); //Cria uma instância do express.
const port = 4000; //Define a porta que o servidor irá escutar.

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


app.listen(port, () => { 
    console.log('Servidor Iniciado na porta'); 
}); //Inicia o servidor na porta definida.