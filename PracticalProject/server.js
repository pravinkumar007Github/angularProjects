const http = require("http");

const app = require("./backend/sqlcon");

// const server = http.createServer((req,res)=>{
// res.end("Welcome to My Node js");
// });

const server = http.createServer(app);


server.listen(3001, ()=>{
    console.log("Check port number 3000");
});