const express = require('express')
const app = express()
const path=require('path')
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.get('/home',(req,res) => {
    const randomNumber=Math.floor(Math.random()*10);

    res.render('index',{randomNumber});
})

app.listen(3000,() => {
    console.log("Port running")
})
