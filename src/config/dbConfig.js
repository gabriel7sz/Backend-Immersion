/**
 * Quando se instala drivers terceiros para a utilização, é sempre importante ler a documentação para saber o que é necessário para rodar a aplicação com o uso daquele driver.
 * 
 * Mesma coisa acontece com o mongoDb, ele necessita de funções específicas que tem que ser executadas para funcionar a conexão.
 * Chamamos isso de receita de bolo...
 * 
 * Segue o código receita de bolo para a conexão do mongo com o banco de dados.
 * */ 

import { MongoClient } from "mongodb";

export default async function conectarAoBanco(stringConexao) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConexao);
        console.log("Conectando ao cluster do banco de dados...");
        await mongoClient.connect();
        console.log('Conectado ao MongoDB Atlas com sucesso!');

        return mongoClient;
    } catch (erro){
        console.error('Falha na conexão com o banco!', erro);
        process.exit();
    }
}