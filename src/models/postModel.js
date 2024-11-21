import conectarAoBanco from "../config/dbConfig.js"

// Cria uma conexão com o banco de dados. A string de conexão é obtida da variável de ambiente STRING_CONEXAO.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Define uma função assíncrona chamada "getTodosPosts" para buscar todos os posts do banco de dados.
export default async function getTodosPosts() {
    // Obtém uma referência ao banco de dados "imersao-instabytes".
    const db = conexao.db("imersao-instabytes");

    // Obtém uma referência à coleção "posts" dentro do banco de dados.
    const colecao = db.collection("posts");

    // Executa uma consulta para encontrar todos os documentos (posts) na coleção e retorna os resultados como um array.
    return colecao.find().toArray();
}
