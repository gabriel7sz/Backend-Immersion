/**
 * importando da pasta node_modules criada quando o express 
 * foi instalado o arquivo express
 * */ 
import express from "express";

// Criando um array
const posts = [
    // criando um objeto
    {
        id: 1,
        descricao: "Uma foto teste", 
        imagem: "https://placecats.com/millie/300/150"
    } ,
    {
        id: 2,
        descricao: "Gato fazendo yoga",
        imagem: "https://placecats.com/millie/300/150"
    } ,
    {
        id: 3,
        descricao: "Gatinho dormindo",
        imagem: "https://placecats.com/millie/300/150"
    } ,
    {
        id: 4,
        descricao: "Receita deliciosa de bolo de chocolate!",
        imagem: "https://placecats.com/millie/300/150"
    } ,
    {
        id: 5,
        descricao: "Meu novo cachorro",
        imagem: "https://placecats.com/millie/300/150"
    } ,
    {
        id: 6,
        descricao: "Alpes suíços",
        imagem: "https://placecats.com/millie/300/150"
    } 
] ;

/**
 * iniciando express
 * Express é uma função que quando for executada passará o resultado
 * para dentro da variável app.
 * Como se app representasse o servidor
 * */ 
const app = express();

// parssear o texto do array em json
app.use(express.json());

/**
 * Fazendo o servidor 'SUBIR'
 * Esta função recebe dois parâmetros.
 * Uma porta e uma função.
 * */ 
app.listen(3000, () => {
    console.log("Servidor escutando....");
});
/**
 * Criando um caminho para o computador cliente recuperar dados.
 * 
 * */ 
app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

// criando uma função que busque por ids dentro do array
function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

/**
 * O que siginifica esses dois pontos?
 * Os ':' diz para o express que esta informação quando for no navegador, será subistítuida por um dando variável.
 * */ 
app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});
