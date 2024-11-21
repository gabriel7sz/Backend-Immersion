// Arquivo responsável por lidar com todas as requisições e respostas.

import getTodosPosts from "../models/postModel.js";

export async function listarPosts(req, res) {
    // Chama a função "getTodosPosts" para obter os dados dos posts do banco de dados.
    const posts = await getTodosPosts();
    // Envia uma resposta com status 200 (OK) e os dados dos posts no formato JSON.
    res.status(200).json(posts);
} 
    