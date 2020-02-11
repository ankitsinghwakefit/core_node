var http = require('http');

// 1. Write script to create a basic http server using createServer method, write 'Welcome to NodeJS' as response and
// listen for request on port 5555.

http.createServer((req,res)=>{
   res.end("Welcome to NodeJS");
}).listen(5555);

// 2. Write script to create a server, send in response the request headers 
// and add listener on port 6666.

var http = require('http');
http.createServer((req,res)=>{
    var ab = JSON.stringify(req.headers);
    res.end(ab);
  }).listen(6666);

// 3. create a server and console request methods and url by doing request 
// from postman or web browsers.

var http = require('http');
http.createServer((req,res)=>{
    var ab = JSON.stringify(req.headers);
    console.log(req.url);
    console.log(req.method);
    res.end(ab);
  }).listen(6660);

// 4. create a server
  // - set response headers as 'text/html' using res.setHeader property.
  // - write some HTML content in response
  // - listen on port 6000

  var http = require('http');
  http.createServer((req,res)=>{
    res.setHeader("Content-Type", "text/html");
    res.write("<h1> This is heading </h1>");
    res.end();
    }).listen(6000);

// 5. create a server
  // - create a seperate file index.html and write some html content
  // - read the html file content and send it in response in createServer method
  // - don't forget to set header before writing to response

  var http = require('http');
  var fs = require("fs");
  http.createServer((req,res)=>{
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./index.html").pipe(res);
    res.end();
    }).listen(6000);


// 6. create a server
  // - create 3 diffenrent file ie. indx.html, about.html, contact.html
  // - inside createServer, handle different urls for serving different html file
  // - '/' route for index.html file
  // - "/about" for about.html file
  // - "/contact" for contact.html file

  http.createServer((req,res)=>{
    if(req.url === "/"){
      req.setHeader("Content-Type","text/html");
      fs.createReadStream("./indx.html").pipe(res);
      res.end();
    }
    if(req.url === "/about"){
      req.setHeader("Content-Type","text/html");
      fs.createReadStream("./about.html").pipe(res);
      res.end();
    }
    if(req.url === "/contact"){
      req.setHeader("Content-Type","text/html");
      fs.createReadStream("./contact.html").pipe(res);
      res.end();
    }
  }).listen(8080,()=>{console.log("listening ....")})

// 7. create an Server(echoServer)
  // handle post request for incoming data from postman using req as eventEmitter
  // send incoming data back in response
  var http = require("http");
  var query = require("querystring");
  
  http.createServer((req,res)=>{
      if(req.url === "/" && req.method === "POST"){
          var store = "";
          req.on("data",(chunk)=>{
              store += chunk;
          });
          req.on("end",()=>{
             var ab = query.parse(store);
             console.log(ab.name);
             res.end(store);
          })
          // res.write("hii");
          // console.log(req.body);
          // res.end();
      }
  }).listen(8080,()=>{console.log("listening....")});

// 8. create a server
  // handle json data from postman
  // parse the json data
  // send json data back in response
  var http = require("http");
var query = require("querystring");

http.createServer((req,res)=>{
    if(req.url === "/" && req.method === "POST"){
        var store = "";
        req.on("data",(chunk)=>{
            store += chunk;
        });
        req.on("end",()=>{
        //    var ab = query.parse(store);
        //    console.log(store.name);
           res.end(store);
        })
        // res.write("hii");
        // console.log(req.body);
        // res.end();
    }
}).listen(8080,()=>{console.log("listening....")});

// 9. create a server
  // handle x-www-urlencoded(form data) coming form postman
  // parse form-data using querystring module
  // send data back in response

  var http = require("http");
  var query = require("querystring");
  
  http.createServer((req,res)=>{
      if(req.url === "/" && req.method === "POST"){
          var store = "";
          req.on("data",(chunk)=>{
              store += chunk;
          });
          req.on("end",()=>{
             var ab = query.parse(store);
             console.log(ab.name);
             res.end(store);
          })
          // res.write("hii");
          // console.log(req.body);
          // res.end();
      }
  }).listen(8080,()=>{console.log("listening....")});

// 10. create a server and add listener on port 7000
  // send get request on 'http://localhost:7000new?username=altcampus/' from postman or browser
  // parse the request url using 'url' core node module
  // extract protocol, path and pathname, query from the request
  // send path in response

  var http = require("http");
var query = require("querystring");
var url = require("url");

http.createServer((req,res)=>{
    if(req.url === "/"){
        console.log("hii");
        console.log(req.url);
        res.end("hii");
    }
}).listen(7000,()=>{console.log("listening....")});

// 11. Write script to create an absolute and relative path of 'theory.md' from the current file.
  // use path module from core node

  var path = require("path");
  var absolute = __dirname+"/theory.md";
  var relative = ./theory.md;


