const http = require("http"); //install depedencies https 
const fs = require("fs");  //install depedencies fs 

const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err,data)=> {
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000"); //see if it works 
});


