// install express
// npm install express --save

const http = require('http')
const server = http.createServer((req,res) => {
    if(req.url === '/home') {
        res.write("Home");
        res.end();
    }
    else if(req.url === '/contact') {
        res.write(`<h1 style = "text-align:center">Contact page</h1>`)
        res.end();
    }
    else {
        res.write(
            `
            <h1 style = "text-align:center">ERROR CODE: 404</h1>
            <h1 style = "text-align:center">PAGE NOT FOUND</h1>
        `)
        res.end();
    }
})

server.listen(5000)
console.log("Server is active on port 5000");