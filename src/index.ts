import { Request, Response } from "express";
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);
require('dotenv').config();


AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source initialized")
    }).catch(error => console.log(error));

app.get("/", async function(req: Request, res: Response) {
    res.send("Connection successful");
})

server.listen(process.env.PORT || 5000, () =>{
    console.log(`Listening to port ${process.env.PORT || 5000}`)
});