/*
In Express.js, middleware refers to functions that have access to the request object (req), the response object (res), and the next function in the application's request-response cycle. These functions can perform various tasks before a request reaches its final route handler or before a response is sent back to the client. 
Key characteristics and functionalities of Express middleware:
Access to req, res, and next:
Middleware functions are designed to interact with the incoming request, the outgoing response, and to pass control to the next middleware in the stack using the next() function.
Execution in order:
Middleware functions are executed in the order they are defined in your Express application. 
Modifying req and res:
Middleware can modify the request object (e.g., adding user information after authentication) or the response object (e.g., setting headers).
Ending the request-response cycle:
Middleware can choose to end the request-response cycle by sending a response (e.g., res.send(), res.json()) instead of calling next(), preventing further middleware or route handlers from executing.
Common use cases:
Authentication and Authorization: Verifying user credentials and permissions.
Logging: Recording details about incoming requests.
Error Handling: Catching and processing errors.
Parsing Request Bodies: Handling JSON or URL-encoded data (e.g., express.json(), express.urlencoded()).
Serving Static Files: Providing access to static assets like images or CSS files (e.g., express.static()).
*/ 
//Last thing in middleware-app.use(express.json()))
const express=require('express');
const app=express();
app.use(express.json());
function UserMidelWare(req,res,next)
{
  const username=req.headers.username;
  const password=req.headers.password;
  if(username!="Subal" || password!="Anand")
  {
    res.status(403).json({
      msg:"Wrong Username or Password"
    })
    }
    else
    {
      next();
    }
  }

  function KidneyMiddleware(req,res,next)
{
  const kidneyId=req.query.kidneyId;
  if(kidneyId!=1 && kidneyId!=2)
  {
    res.status(403).json({
      msg:"Wrong Kideny ID"
    })
    }
    else
    {
      next();
    }
  }
  app.get('/health-check',UserMidelWare,KidneyMiddleware,function(req,res){
    res.send(
      "Your Health is Good"
    )
  })
  app.get('kidney-check',UserMidelWare,KidneyMiddleware,function(req,res){
    res.send(
      "Your Kidney is Healthy"
    )
  })
  app.get('Insurance-check',UserMidelWare,function(req,res){
    res.send(
      "You have a valid Insurance"
    )
  })

  app.listen(3000);
