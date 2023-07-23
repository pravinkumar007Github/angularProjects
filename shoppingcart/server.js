const http = require("http");

const app = require("./backend/app");

// const server = http.createServer((req,res)=>{
// res.end("Welcome to My Node js");
// });

const server = http.createServer(app);


server.listen(3000, ()=>{
    console.log("Check port number 3000");
});