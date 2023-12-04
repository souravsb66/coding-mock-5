const express = require("express");
const connection = require("./db");
require("dotenv").config();

const app = express();
app.get("/", (req,res) => {
    res.send({message: "Welcome to Home"});
})

app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("Connected to DB");
        console.log("Listening on port " + process.env.PORT);
    }
    catch(err) {
        console.log(err);
    }
})