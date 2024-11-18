/**
 * importando da pasta node_modules criada quando o express 
 * foi instalado o arquivo express
 * */ 
import express from "express";
/**
 * iniciando express
 * Express é uma função que quando for executada passará o resultado
 * para dentro da variável app.
 * Como se app representasse o servidor
 * */ 
const app = express();
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
app.get("/api", (req, res) => {
    res.status(200).send("Boas Vindas a imersão");
});