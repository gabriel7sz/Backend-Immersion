//Representação de dados para enviar para o banco
import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Cria uma conexão com o banco de dados. A string de conexão é obtida da variável de ambiente STRING_CONEXAO.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Define uma função assíncrona chamada "getTodosPosts" para buscar todos os posts do banco de dados.
export async function getTodosPosts() {
    // Obtém uma referência ao banco de dados "imersao-instabytes".
    const db = conexao.db("imersao-instabytes");

    // Obtém uma referência à coleção "posts" dentro do banco de dados.
    const colecao = db.collection("posts");

    // Executa uma consulta para encontrar todos os documentos (posts) na coleção e retorna os resultados como um array.
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
};

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
};
