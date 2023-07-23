const express = require("express");

const mongodb = require("mongodb").MongoClient;
const cors = require("cors");
const bodyparser = require("body-parser")
const jwt = require("jsonwebtoken");
const multer = require("multer")
const app = express();

var db;

mongodb.connect("mongodb+srv://pravin:pass@word1@cluster0.n77i0.mongodb.net/shoppingcartDB?retryWrites=true&w=majority",(error,result)=>{
if(error)
{
   
    console.log("DB not connected")
}
else
{
   db = result.db("shoppingcartDB");
   console.log("DB connected");
}
});

app.use(cors());
app.use(bodyparser.json())

app.use((req,res,next)=>{

console.log("Middlewere 1")
    next();
});

app.use("/home",(req,res,next)=>{

    console.log("Middlewere 2")
        next();
    });

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
    db.collection("products").find().toArray((error, data)=>{

        res.json(data);
    });
});

app.get("/getpdtcatwise/:catid", (req, res)=>{

    console.log(req.params);

    db.collection("products").find({Category_Type : Number(req.params.catid)}).toArray((error, data)=>{

        res.json(data);
    });

});

app.get("/getcategories", (req, res)=>{

    db.collection("category").find().toArray((error, data)=>{

        res.json(data);
    });
});

app.post("/register", (req,res)=>{

    req.body._id = new Date().getTime();
    
    db.collection("users").save(req.body,(error,data)=>{
     if(error)
     {
        res.status(403).json("Error in Regestration");
     }
     else
     {
        res.json("User Register Suucessfully");
     }
    })
})

app.post("/login",(req,res)=>{
    console.log(req.body);
    db.collection("users").find(req.body,{projection:{_id:1,Username:1}}).toArray((error,data)=>{
        //res.json(data);
        var token = '';
        if(data.length>0)
        {
            token = jwt.sign(data[0],"myseckey");
        }
        res.json(token);
    })
  
})


var loggeduser;
function verifyToken(req,res,next)
{
    var token = req.headers.myauthtoken;

    if(!token)
    {
     return res.status(401).json("No Token Found");
    }

    jwt.verify(token,"myseckey",(error,data)=>{
     if(error)
     {
         console.log(error);
         return res.status(401).json("Token Missmatch");
     }

     loggeduser = data;

    });
   next();
}

app.get("/cartitems",verifyToken,(req,res)=>{
    db.collection("cart").aggregate([
        { $match: { cartUserId: loggeduser._id } },
            { $lookup:
               {
                from: 'products',
                localField: 'cartPdtId',
                foreignField: '_id',
                as: 'productdetails'
              }
            }
           ]).toArray((err, data)=> {
            res.json(data);
         });
       
        
    
})

app.get("/getCategory",(req,res)=>{
    db.collection("category").find().toArray((error,data)=>{
        console.log(data);
        res.json(data);
    })
})

const myStorage = multer.diskStorage({
    destination: (req,file,cb)=>{
      cb(null,"src/assets/product_images")
    },
    filename:(req,file,cb)=>{
       cb(null,file.originalname+"-"+new Date().getTime()+".png")
    }
});


app.post("/addproducts",verifyUser,multer({storage:myStorage}).single("Product_Img"),(req,res)=>{
    req.body._id = new Date().getTime();
    req.body.Category_Type = Number(req.body.Category_Type);
    req.body.Product_Amount = Number(req.body.Product_Amount);
    req.body.imgPath = req.file.filename;
    console.log(req.body);
    db.collection("products").insert(req.body,(error,data)=>{
        res.json("Success");
    })
   
})

app.post("/addtocart",verifyToken,(req,res)=>{
 
 db.collection("cart").find({cartPdtId : Number(req.body.cartPdtId),cartUserId:loggeduser._id}).toArray((error, data)=>{
     console.log(data);
     if(data.length == 0)
     {
        req.body._id = new Date().getTime();
        req.body.cartQty = 1;
        req.body.cartUserId = loggeduser._id;
        console.log(req.body);
        db.collection("cart").insert(req.body,(error,data)=>{
           res.json("Cart Item added suucessfully")
        });
     }
     else
     {
           var quantity = Number(data[0].cartQty);
           quantity = quantity+1;
           console.log(req.body);
           var pdtUpdatePrice = Number(req.body.cartPdtPrice)
           var condition = {_id:data[0]._id};
           var newValues = {$set:{cartQty:quantity, cartPdtPrice: quantity * pdtUpdatePrice }};
           db.collection("cart").update(condition,newValues, (error,data)=>{
              res.json("Cart Item Updated")
             });

     }
 })


 
});

app.get("/cartcount", verifyToken,(req,res)=>{
    db.collection("cart").count({cartUserId:loggeduser._id},(error,data)=>{
    res.json(data)
    });
});

app.put("/updatecart", verifyToken, (req,res)=>{

  var condition = {_id:req.body.cartID};
  var newValues = {$set:{cartQty:req.body.cartQty, cartPdtPrice: req.body.cartQty* req.body.pdtPrice}};
  db.collection("cart").update(condition,newValues, (error,data)=>{
   res.json("Cart Item Updated")
  });

});

app.delete("/removecart/:cartId",verifyToken,(req,res)=>{
    console.log(req.params.cartId);
    db.collection("cart").deleteOne({_id:Number(req.params.cartId)},(error,data)=>{
        console.log(error);
        res.json("Cart Item Removed Successfully");
    })
})

app.get("/getproductbyId/:pdtId",verifyToken,(req,res)=>{
   
    db.collection("products").find({_id:Number(req.params.pdtId)}).toArray((error,data)=>{
        res.json(data);
    })
})

app.get("/getsimilarproduct/:pdtId",verifyToken,(req,res)=>{
   
    var numberpdtid = Number(req.params.pdtId);
    var querry = { _id: { $ne: numberpdtid } }
    db.collection("products").find(querry).toArray((error,data)=>{
        console.log(data)
        res.json(data);
    })
})
module.exports = app; 


