import DataUser from "../../models/DataUser.js";

/**
 * @type {import("express").RequestHandler}
 */


const List =  (req, res) => {
    res.send({ DataUser });
    
};


const Detail = (req, res) => {
    const name = req.params.name;
    const result = DataUser.filter((data) => data.name === name.toLowerCase())

    res.send({ result });
};

const Create = (req, res) => {
    const body = req.body;

    DataUser.push(body)

    res.send({ DataUser })
}

export {List, Detail, Create};