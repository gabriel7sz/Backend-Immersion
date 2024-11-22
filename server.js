// Importa o framework Express.js, que será utilizado para criar a aplicação web.
import express from "express";
import routes from "./src/routes/postRouts.js";

// Cria uma instância do Express.js, que será o ponto de partida da aplicação.
const app = express();
app.use(express.static("uploads"))
routes(app)

// Inicia o servidor Express.js, escutando na porta 3000.
// A função de callback é executada quando o servidor está pronto para receber requisições.
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

