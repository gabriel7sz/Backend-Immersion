import express from express;

const routes = (app) => {
    // Habilita o middleware para analisar o corpo das requisições que contêm dados no formato JSON.
    app.use(express.json());

    // Define uma rota GET para a URL "/posts". Quando uma requisição GET é feita para essa URL, esta função é executada.
    app.get("/posts", async (req, res) => {
        // Chama a função "getTodosPosts" para obter os dados dos posts do banco de dados.
        const posts = await getTodosPosts();
        // Envia uma resposta com status 200 (OK) e os dados dos posts no formato JSON.
        res.status(200).json(posts);
    });
};

export default routes;
