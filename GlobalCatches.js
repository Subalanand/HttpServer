const express=require('express');
const app=express();
app.use(express.json());
app.post('/',function(req,res){
  const kidneyId=req.body.kidneyId;
  const kidneylength=kidneyId.length;
  res.send("you have "+kidneylength+" kidneys");
})
//global error handling middleware
//global catches help us to give the user a better error message
//global catches help us to avoid the server crash
//global catches help us to log the error in a file or database
//global catches help us to notify the developer about the error
//global catches help us to debug the error
//global catches help us to handle the error in a better way
//global catches help us to avoid the duplicate code
//global catches help us to avoid the nested try catch blocks
//global catches help us to avoid the callback hell
//global catches help us to avoid the unhandled promise rejections
//global catches help us to avoid the unhandled exceptions
//global catches help us to avoid the unhandled errors
//Erro handling middleware : This is a special type of middleware that takes four arguments (err, req, res, next). It is used to catch and handle errors that occur in the application.
app.use(function(err,req,res,next){
  res.status(500).send('Something broke!');
});
app.listen(3000);