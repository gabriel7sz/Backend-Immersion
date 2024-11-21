// Cria as rotas para interação com o backend

import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({dest: "./uploads ", storage})

const routes = (app) => {
    // Habilita o middleware para analisar o corpo das requisições que contêm dados no formato JSON.
    app.use(express.json());

    // Define uma rota GET para a URL "/posts". Quando uma requisição GET é feita para essa URL, esta função é executada.
    app.get("/posts", listarPosts);
    // Define uma rota para criar um post
    app.post("/posts", postarNovoPost);

    app.post("/upload", upload.single("imagem"), uploadImagem)
};

export default routes;
