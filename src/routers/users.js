import express from "express";
import { List, Detail, Create } from "../controllers/users/index.js"


const Router = express.Router();

Router.get("/", (req, res) => {
    res.send("Hello from Maman");
});

Router.get("/home", (req, res) => {
    res.send("This is Maman's Home");
});

Router.get("/about/:name", (req, res) => {
    const { name } = req.params;
    const {id, product_id} = req.query;
    const body= req.body;

    res.send({ name, id, product_id, body})
});

Router.get("/users/List", List);

Router.get("/users/:name", Detail);

Router.post("/users/new", Create);

Router.get("/product/:id", (req, res) => {
    const { id } = req.params;
    const query = req.query;
    res.send({
        id,
        query,
    });
});

// Router.get("/:category/:tag", (req, res) => {
//     const {category, tag} = req.params;
//     res.send({category, tag
//         // category: category,
//         // tag: tag
//     })
// })

export default Router;