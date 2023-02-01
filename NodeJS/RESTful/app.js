const express = require('express')
const app = express()
const path = require('path')
app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'))
app.use(express.urlencoded({extended:true}));
const comments=[
    {
        id: 0,
        user:"john",
        text:"this is first comment"
    },
    {
        id: 1,
        user:"harry",
        text:"this is second comment"
    },
    {
        id: 2,
        user:"ron",
        text:"this is third comment"
    }
]

app.get('/comments',(req,res)=>{
    res.render('index',{comments})
})

app.get('/comments/new',(req,res)=>{
    res.render('new')
})

app.post('/comments',(req,res)=>{
    var obj={
        id : req.body.id,
        user : req.body.user,
        text : req.body.text
    }
    comments.push(obj)
    res.render('index',{comments})
})

app.listen(3000,() => {
    console.log('server listen at port 3000');
})