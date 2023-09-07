const express = require("express");
const ejs = require("ejs");
const bp = require("body-parser");
// const mongoose = require("mongoose");


// var url = "mongodb+srv://ahmed:ahmed@cluster0.y4qsdmp.mongodb.net/ "
// mongoose.connect(url).then(() => { console.log("Connected to MongoDB"); }).catch((err) => { console.log(err); })

const mydb = require('./model');

// db.find({}).then((fitems)=>{
//     console.log(fitems);
// }).catch((e)=>{
//     console.log(e);
// })


const app = express();
app.set("view engine","ejs");
app.use(bp.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    mydb.db.find({}).then((fitems)=>{
        var posts = fitems.map((item)=>item.toObject());
        mydb.db.find().sort({_id:-1}).limit(3).then((fit)=>{
            var lastposts = fit.map((item)=>item.toObject());

            res.render("index.ejs",{post:posts,lp:lastposts});
        })
        
        
    }).catch((e)=>{
        console.log(e);

    
    })
})
app.get("/cate/:cat",(req,res)=>{
    var val = req.params.cat;
    mydb.db.find({cate:val}).then((fitems)=>{
        var posts = fitems.map((item)=>item.toObject());
        mydb.db.find().sort({_id:-1}).limit(3).then((fit)=>{
            var lastposts = fit.map((item)=>item.toObject());

            res.render("index.ejs",{post:posts,lp:lastposts});
        })
        
        
    }).catch((e)=>{
        console.log(e);

    
    })
})
app.get("/temp/:name",(req,res)=>{
    var value = req.params.name;
    // console.log(value);
    mydb.db.findOne({title:value}).then((fitems)=>{
        // console.log(fitems);
        // console.log(fitems.title);

        // var posts = fitems.map((item)=>item.toObject());
        res.render("template.ejs",{article:fitems});
    }).catch((e)=>{
        console.log(e);

    
    })
})

app.post("/",(req,res)=>{
    var sar = req.body.search;
    // console.log(sar);
    res.redirect(`/search?sar=${sar}`);
  })
  
app.get('/search',(req,res)=>{
    var sar = req.query.sar;
    mydb.db.find({title:{ $regex: new RegExp(sar,"i")} }).then((fitems) => {
        var posts = fitems.map((item)=>item.toObject());
        mydb.db.find().sort({_id:-1}).limit(3).then((fit)=>{
            var lastposts = fit.map((item)=>item.toObject());

            res.render("index.ejs",{post:posts,lp:lastposts});
        })
        
        
    }).catch((e)=>{
        console.log(e);

    
    })
    
})



app.listen(3000,()=>{
    console.log("Server is Running");
})
