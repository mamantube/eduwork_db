import express from "express"
const app = express()
import UsersRoute from "./src/routers/users.js";
import log from "./src/middleware/logger.js";

app.use(log);
app.use(express.urlencoded({extend: false, limit: "5mb" }));
app.use(express.json({ limit: "5mb" }));
app.use(UsersRoute)
app.use((req, res, next) => {
    res.status(404);
    res.send({
        status: "failed",
        message: "Resource " + req.originalUrl + "Not Found"
    })
})

app.listen(3000, () => {
    console.log("app success run on http://localhost:3000");
});