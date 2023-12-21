/**
 * @type {import("express").RequestHandler}
 */
import DataUser from "../../models/DataUser.js";

const List =  (req, res) => {
    res.send({ DataUser });
    
};

const Detail = (req, res) => {
    const name = req.params.name;

    res.send({ name });
}

export {List, Detail};