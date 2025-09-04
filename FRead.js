const express=require('express')
const fs=require("fs");
const app=express();

app.get('/files/:filename',function(req,res)//:fileName means anything that i want to access
{
  const name=req.params.filename;
  //params is used to access the route parameters
  console.log(name);
  //fs module is used to read the file
  //fs.readFileSync is used to read the file synchronously
  //it blocks the event loop until the file is read
  //utf-8 is used to read the file in utf-8 format
  //utf-8 is used to read the file in human readable format
  //if we don't use utf-8 it will return the file in binary format
  //fs.readFile is used to read the file asynchronously
  //localhost:3000/files/s.txt
  //it will show all the value of a.txt that is created in the folder
  fs.readFile(name,"utf-8",function(err,data)
{
  res.json({
    data
  })
  
})
 
})
app.listen(3000)
