const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);
require('dotenv').config();

server.listen(process.env.PORT || 5000, () =>{
    console.log(`Listening to port ${process.env.PORT || 5000}`)
})