const express = require("express");
const ejs = require("ejs");
const bp = require("body-parser");
const mongoose = require("mongoose");


const app = express();
app.set("view engine","ejs");
app.use(bp.urlencoded({ extended: true }));
app.use(express.static("public"));
let caon;
app.post("/",(req,res)=>{
    caon = req.body.search;
})

module.export  = {
    caon
}