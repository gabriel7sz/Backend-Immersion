// Importa o framework Express.js, que será utilizado para criar a aplicação web.
import express from "express";
import routes from "./src/config/routes/postRouts.js";

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
routes(app)

// Inicia o servidor Express.js, escutando na porta 3000.
// A função de callback é executada quando o servidor está pronto para receber requisições.
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

