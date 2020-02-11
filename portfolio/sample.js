

// var http = require('http');
// var fs = require('fs');

var server = http.createServer(requestHandler);

function requestHandler(req, res) {
  
  // handle all html file together
  if(req.url === '/') {
    // set appropriate headers
    res.setHeader('Content-Type', 'text/html')
    // read file and send chunked data in response
    fs.createReadStream(file_path).pipe(res);
    // for all css files
  } else if(req.url.includes('css')) {
    //handle css file here
    // first set headers ie. 'text/css'
    // read css file and send it in response using createReadStream

    // for handling images
  } else if(['png', 'jpg', 'jpeg'].indexOf(req.url.split('.').pop())) {
    //send images here with appropraite content type
  }
  else {
    res.statusCode = 400;
    res.end('Page not found')
  }
}


server.listen(3000);
var http = require("http");
var fs = require("fs");
var url = require("url");
var query = require("querystring");

http.createServer((req,res)=>{
  var parsedUrl = url.parse(req.url,true);
    var pic=parsedUrl.pathname;
    console.log(pic);

  if(req.url === "/"){
    res.setHeader("Content-Type","text/html")
    fs.createReadStream("./index.html").pipe(res);
  } 
  else if(req.url.includes("css")){
    res.setHeader("Content-Type","text/css");
    fs.createReadStream("./stylesheet/style.css").pipe(res);
  } 
  // ["jpg"].indexOf(req.url.split(".").pop())
  else if(req.url.includes("jpg")){
    console.log("hii");
    console.log(parsedUrl);
    res.setHeader("Content-Type","image/jpg");
    fs.createReadStream("."+pic).pipe(res);
    // res.end();
  }
    
    console.log(req.url);
  // fs.createReadStream("./index.html").pipe(res);
}).listen(8080,()=>{console.log("listening...")})
