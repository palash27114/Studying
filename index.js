const express = require('express')
//import express from "express "

require('dotenv').config()

const app = express()

const info={
  "message": "Not Found",
  "documentation_url": "https://docs.github.com/rest",
  "status": "404"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
        res.send("Twitterhere")
})

app.get('/login',(req,res)=>{
    res.send("enter your login details")
})
 
app.get('/youtube',(req,res)=>{
    res.send('<h2>chai aur Code </h2>')
})

app.get('/github',(req,res)=>{
  res.json(info)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})