const http = require('http');
const path = require('path');
const fs = require('fs');

const htmlFile = path.join(__dirname,"public","index.html");
const server = http.createServer((req,res)=>{
    if(req.method === 'GET'){
        console.log(req.url,"this is the current request");
        if (req.url ==='/') {
            fs.readFile(htmlFile, (err,data) =>{
                console.log(htmlFile);
                if(err) {
                    res.writeHead(500);
                    res.end(err.message);
                } else {
                    res.writeHead(200, {"content-type":"text/html"});
                    res.end(data)
                }
                
            });
        }
        if (req.url === "/style.css") {
            fs.readFile (
                path.join(__dirname,"public","style.css"),
                (err,styleFile) => {
                    if (err) {
                        res.writeHead(500);
                        res.end(err.message);
                    } else {
                        res.writeHead(200, {"content-type":"text/css"});
                        res.end(styleFile)
                    }
                }
            )
        }
        if (req.url === "/script.js") {
            fs.readFile (
                path.join(__dirname,"public","script.js"),
                (err,scriptFile) => {
                    if (err) {
                        res.writeHead(500);
                        res.end(err.message);
                    } else {
                        res.writeHead(200, {"content-type":"application/json"});
                        res.end(scriptFile)
                    }
                }
            );
        }
        
        
    }
});






const port = 3000 || 4000;
server.listen(port,()=> {
    console.log("Server is running on port ",port);
    
})