const express = require('express')
const app = express()
const port = 3000


// app.use((req,res) => {
//   console.log('server chaaal rhiyo hai')
// })

app.get('/r/:subreddit',(req,res) => {
    console.log(req.params);
    const {subreddit} = req.params;
    res.send(`<h1 style = "text-align:center">WATCH DOGS</h1>
    <h1 style = "text-align:center">${subreddit} NOT FOUND</h1>`)
})

app.get('/search',(req,res) => {
    console.log(req.query);
    res.send(`JAI SHREE RAAM FROM ${req.query} `)
})

app.listen(port,() => {
  console.log(`Running at port 3000`)
})