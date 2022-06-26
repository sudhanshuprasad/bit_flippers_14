const http=require('http');
const connectToMongo = require('./db');
const dotenv=require('dotenv').config();

connectToMongo();

const express = require('express')
const app = express();
const port = process.env.PORT||5000

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

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('check');
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/clothitem', require('./routes/clothItem'));

app.listen(port,() => {
  console.log(`backend listening on port ${port}`)
})
