const express = require('express')
const app = express()
const path = require('path')
app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'))

app.get('/get',(req,res) => {
    console.log(req.query);
    res.render('index')
})

app.listen(5000,() => {
    console.log('server listen at port 5000');
})