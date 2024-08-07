const app = require('./app');
const http = require('http')
const server = http.createServer(app);
import { AppDataSource } from "./data-source";


AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source initialized")
    }).catch(error => console.log(error));

server.listen(process.env.PORT || 5000, () =>{
    console.log(`Listening to port ${process.env.PORT || 5000}`)
});