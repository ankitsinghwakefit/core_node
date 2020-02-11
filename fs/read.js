var fs = require('fs');

// Use fs module for all operatins below.


// 1. Write script to read file theory.md and console the output buffer.

var printContent = fs.readFile("./theory.md",(err,content)=>{
  if(err){
    console.log(err);
  }
  console.log(content);
})

// 2. Write script to read file theory.md and convert resulted buffer using toString
  // method and console the result.

  var printContent = fs.readFile("./theory.md",(err,content)=>{
    if(err){
      console.log(err);
    }
    var data = content.toString();
    console.log(data);
  })


// 3. Write script to read file Synchronously and console the output.

var readSync = fs.readFileSync("./theory.md");
console.log(readSync);


// 4. Write script to create a file 'write.js' and write content of read.js in there.

fs.open("__dirname"+"/write.js/","wx",(err,fd)=>{
  if(err){
    console.log(err);
  }
  var fileContent;
  fs.readFile("./read.js",(err,content)=>{
    fileContent = content;
  })
  fs.writeFile(fd,fileContent,(err)=>{
    if(err){
      console.log(err);
    }
  })
})

// 5. Write script to update content of write.js. Update it with content of theory.md
//   Steps are
//   - open the file(write.js) using fs.open
//   - remove earlier content using fs.ftruncate
//   - add new content using fs.writeFile
//   - close the file at last using fs.close

fs.open("__dirname+./write.js","r+",(err,fd)=>{
  if(err){
    console.log(err);
  }
  fs.ftruncate(fd,(err)=>{
    if(err){
      console.log(err);
    }
  });
  var theoryData;
  var fileData = fs.readFile("./theory.md",(err,content)=>{
    if(err){
      console.log(err);
    }
    theoryData = content;
  });
  fs.writeFile(fd,theoryData,(err)=>{
    if(err){
      console.log(err);
    }
    fs.close(fd,err=>{
      if(err){
        console.log(err);
      };
    })
  })
})

// 6. Delete the content of write.js using fs.unlink or unlinkSync method

fs.unlink("__dirname+/write.js/",(err)=>{
  if(err){
    console.log(err);
  }
});