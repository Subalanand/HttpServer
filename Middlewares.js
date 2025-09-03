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

  app.listen(3000);
