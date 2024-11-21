import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    // Habilita o middleware para analisar o corpo das requisições que contêm dados no formato JSON.
    app.use(express.json());

    // Define uma rota GET para a URL "/posts". Quando uma requisição GET é feita para essa URL, esta função é executada.
    app.get("/posts", listarPosts);
};

export default routes;
