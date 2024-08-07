import { Request, Response } from "express";
import { User } from "./entity/User"
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.get("/", async function(req: Request, res: Response) {
    res.send("Connection successful");
})

export default app;