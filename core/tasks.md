1. Explain Node and V8 in your own words ? 

Node is a run time envirnoment build on v8 engine using javascript and C++, where we can process our data in backend using javascript.
V8 is javascript engine which is present inside every browser so that brouser can understand javascript and do fulfill the asked action.

// Answer here...

2. Explain steps in REPL(here) and command to start REPL ?

in terminal we have to write - node
we can perform operations and can get help by - .help

// Answer here...

3. Run `index.js` in the same directory as script writer using `node FILE_NAME.js` and output result of console here.

hello World
<Buffer 23 23 20 47 6c 6f 62 61 6c 73 0a 47 6c 6f 62 61 6c 73 20 61 72 65 20 70 61 63 6b 61 67 65 73 20 6f 72 20 6d 6f 64 75 6c 65 73 20 77 68 69 63 68 20 61 ... >



4. Require fs module and read `theory.md` using fs.readFile method in index.js file.
const fs = require("fs");
 fs.readFile("./theory.md",(err,content)=>{
    if(err){
      console.log(err);
    }
    console.log(JSON.parse(content));
  })

5. Explain Buffer and different methods to create a buffer ?

const buffer = new Buffer("I am sample buffer");
const buffer = new Buffer(10);

6. What is blocking code ? How is it different from non-blocking/async codes ? Correct blocking code in index.js to run asynchronously ?

A blocking code is sycn code as after running a js file, call stack is not free till it has executed all sync code so async code has to wait for sync code to executed fully so sync code are blocking code. in javascript non bloking code will wait untill call stack free thus async code is waiting for their turn to execute and also not bloking call stack.  
// Answer here ...

7. Request from browser `https://altcampus.io` and copy request, response and general headers into answer.js.

GENERAL :
Request URL: https://www.google-analytics.com/collect?v=1&_v=j80&a=295716446&t=pageview&_s=1&dl=https%3A%2F%2Faltcampus.io%2F&ul=en-gb&de=UTF-8&dt=AltCampus%20-%20The%20Alternative%20to%20College%20That%20You%20Wish%20Existed&sd=24-bit&sr=1920x1080&vp=1905x335&je=0&_u=AACAAUAB~&jid=&gjid=&cid=681160531.1574384148&tid=UA-121886584-1&_gid=1267673553.1580870752&gtm=2ou1m0&z=1931704243
Request Method: GET
Status Code: 200 
Remote Address: 172.217.167.206:443
Referrer Policy: no-referrer-when-downgrade

RESPONSE :
access-control-allow-origin: *
age: 292733
alt-svc: quic=":443"; ma=2592000; v="46,43",h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000
cache-control: no-cache, no-store, must-revalidate
content-length: 35
content-type: image/gif
date: Sat, 01 Feb 2020 17:27:25 GMT
expires: Mon, 01 Jan 1990 00:00:00 GMT
last-modified: Sun, 17 May 1998 03:00:00 GMT
pragma: no-cache
server: Golfe2
status: 200
x-content-type-options: nosniff

REQUEST: 
:authority: www.google-analytics.com
:method: GET
:path: /collect?v=1&_v=j80&a=295716446&t=pageview&_s=1&dl=https%3A%2F%2Faltcampus.io%2F&ul=en-gb&de=UTF-8&dt=AltCampus%20-%20The%20Alternative%20to%20College%20That%20You%20Wish%20Existed&sd=24-bit&sr=1920x1080&vp=1905x335&je=0&_u=AACAAUAB~&jid=&gjid=&cid=681160531.1574384148&tid=UA-121886584-1&_gid=1267673553.1580870752&gtm=2ou1m0&z=1931704243
:scheme: https
accept: image/webp,image/apng,image/*,*/*;q=0.8
accept-encoding: gzip, deflate, br
accept-language: en-GB,en-US;q=0.9,en;q=0.8
dnt: 1
referer: https://altcampus.io/
sec-fetch-mode: no-cors
sec-fetch-site: cross-site
user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36

8. Parse the URL `http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4` using `url` module's parse method and write output in answer.js

var url = require("url");
var sampleURL = "http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4";
console.log(url.parse(sampleURL));


9. parse the query object as well from above url using `url.parse(url, true)` and output result in answer.js

var url = require("url");
var sampleURL = "http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4";
console.log(url.parse(sampleURL,true));

10. create a file `math.js`
  1. Export variables and functions
    - define a const pie = 3.14
    - define functions to add and multiply 2 numbers
    - export it from math.js
    - require in index.js and console the output by executing it there.
```js
// math.js

  const pie = 3.14;
  function sum() {
    console.log(pie+pie);
  }
  function multiply() {
    console.log(pie*pie);
  }
module.exports.pie = pie;
module.exports.sum = sum();
module.exports.multiply = multiply();
// export it from math.js
```

  2. Define above const and functions as properties and methods on module.exports object.
    - require in index.js and execute it.

```js
  module.exports = {
    pie: 3.14,
    add: () => {}
  }
```
  3. Define above using exports 

```js
exports.sum = () => {}
```
