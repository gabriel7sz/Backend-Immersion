// Importa o framework Express.js, que será utilizado para criar a aplicação web.
import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

// Cria uma conexão com o banco de dados. A string de conexão é obtida da variável de ambiente STRING_CONEXAO.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Define um array (lista) chamado "posts", que armazenará os dados dos posts (publicações).
// Cada objeto dentro do array representa um post, com as propriedades id, descricao e imagem.
const posts = [
    { 
        id: 1, 
        descricao: "Uma foto teste", 
        imagem: "https://placecats.com/millie/300/150" 
    },
    { 
        id: 2, 
        descricao: "Gato fazendo yoga", 
        imagem: "https://placecats.com/millie/300/150" 
    },
];

// Cria uma instância do Express.js, que será o ponto de partida da aplicação.
const app = express();

// Inicia o servidor Express.js, escutando na porta 3000.
// A função de callback é executada quando o servidor está pronto para receber requisições.
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

// Define uma função assíncrona chamada "getTodosPosts" para buscar todos os posts do banco de dados.
async function getTodosPosts() {
    // Obtém uma referência ao banco de dados "imersao-instabytes".
    const db = conexao.db("imersao-instabytes");

    // Obtém uma referência à coleção "posts" dentro do banco de dados.
    const colecao = db.collection("posts");

    // Executa uma consulta para encontrar todos os documentos (posts) na coleção e retorna os resultados como um array.
    return colecao.find().toArray();
}
