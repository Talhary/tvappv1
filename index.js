const express = require('express');
const app = express();
const fs = require('fs')
require('dotenv').config();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.static('./public'))
app.get('/dramas',async(req,res)=>{
  const data = JSON.parse(fs.readFileSync('data.json','utf8'))
  res.json(data)
})
app.listen(port,()=>{
    console.log('server runngindfkd')
})