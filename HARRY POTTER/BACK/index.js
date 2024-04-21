// const express = require("express");
import express from "express";
import router from "./routes/start.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// /users en GET = liste d'utilisateurS
// /users en POST = ajouter un utilisateur (body accessible) => .push
// /users/:id en GET = afficher un utilisateur // .find
// /users/:id en PUT = modifier un utilisateur (body accessible) // .find et =
// /users/:id en DELETE = supprimer un utilisateur // .find et .splice
