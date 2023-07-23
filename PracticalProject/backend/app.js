const express = require("express");
const mongodb = require("mongodb").MongoClient;
var bodyParser = require('body-parser');
var multer = require('multer');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var upload = multer();
const app = express();

var db;

mongodb.connect("mongodb+srv://pravin:pass@word1@cluster0.n77i0.mongodb.net/sampleMongoDB?retryWrites=true&w=majority",(error,result)=>{
if(error)
{
   
    console.log("DB not connected")
}
else
{
   db = result.db("sampleMongoDB");

   
  
    console.log("DB connected");

   
   //console.log("DB connected");
   
}
});

app.use((req,res,next)=>{

console.log("Middlewere 1")
    next();
});

app.use("/home",(req,res,next)=>{

    console.log("Middlewere 2")
        next();
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));

function verifyUser(req,res,next)
{
    console.log("User verified");
    next();
}

app.get("/",(req,res)=>{

var obj = {a:"Hi",b:"hello"}    

//res.send(obj);
console.log("Index page");
 res.json("<h1>Welcome to express</h1>")

});

app.get("/home",verifyUser,(req,res)=>{
    console.log("Home page");
res.json("welcome to home page");
});

var products = [
{
    pdtName:"Knorr Instant Soup (100 Gm)",
    patPath:"http://localhost:4200/assets/images/5.png",
    pdtPrice : 90
},
{
    pdtName:"Chings Noodles (75 Gm)",
    patPath:"http://localhost:4200/assets/images/6.png",
    pdtPrice : 75
},
{
    pdtName:"Lahsun Sev (150 Gm)",
    patPath:"http://localhost:4200/assets/images/7.png",
    pdtPrice : 25
},
{
    pdtName:"Premium Bake Rusk (300 Gm)",
    patPath:"http://localhost:4200/assets/images/8.png",
    pdtPrice : 50
}
]

app.get("/listproducts",(req,res)=>{
res.json(products);
});

var productstatus = [
    {Status:"Added",ResponseText:"Suucess"}
]

app.get("/addproducts",(req,response)=>{
    var obj = {productName:"Samsung",productAmount:500,Active:true};
    db.collection("Users").insertOne(obj,function(err,res){
        if (err) throw err;
        console.log("1 document inserted");
        response.json(productstatus);
       
       });
});

app.get("/addmultipleproducts",(req,response)=>{
 var addproductlist = [
    {productName:"Vivo",productAmount:500,Active:true},
    {productName:"Oppo",productAmount:500,Active:true},
    {productName:"Nokia",productAmount:500,Active:true},
    {productName:"Redmi",productAmount:500,Active:true},
    {productName:"Realme",productAmount:500,Active:true},
    {productName:"Xiomi",productAmount:500,Active:true},
    {productName:"Lenavo",productAmount:500,Active:true},
    {productName:"Dell",productAmount:500,Active:true},
    {productName:"HP",productAmount:500,Active:true}
 ];
 db.collection("Users").insertMany(addproductlist, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    response.json(productstatus);
   
  });
});

app.get("/getproducts",(req,response)=>{
db.collection("Users").find({}).toArray(function(err,result){
    if (err) throw err;
    response.json(result);
});
});

app.get("/searchproduct",(req,response)=>{
    
    var querry = {productName:"Zebronics"};
    db.collection("Users").find(querry).toArray(function(err,result){
        if (err) throw err;
        response.json(result);
    });
});
var updateproducts = [
    {Status:"Updated",ResponseText:"Suucess"}
];
app.get("/updateproduct",(req,response)=>{
    var myvalues = {productName:"Dell"};
    var updatevalues = {$set:{productName:"Zebronics"}};
    db.collection("Users").updateOne(myvalues,updatevalues,function(err,result){
        if (err) throw err;
        response.json(result);
    });
    response.json(updateproducts);
});

app.post("/postdata",urlencodedParser,function(req,res){
    res.send('Product Name:, ' + req.body.productName)
    res.json(productstatus);
});

module.exports = app;


