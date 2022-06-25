const http=require('http');
const dotenv=require('dotenv').config();
const connectToMongoose=require('./db')

connectToMongoose();

const express=require('express');
const app=express;
const port= process.env.PORT||5001

const cors = require('cors');
const res = require('express/lib/response');
const { contentType, json } = require('express/lib/response');
const { application } = require('express');
const { hostname } = require('os');
app.use(
  cors({
    origin: "*",
    allowedHeaders: "*"
  })
)

app.use(express.json());

const server=http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello World');
})

app.listen(port,()=>{
    console.log("The backend listening at port "+port);
})