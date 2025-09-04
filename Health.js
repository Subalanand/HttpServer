const express=require('express');
const app=express();

const users=[{name:'Subal',
  Kidneys:[{
    healthy:false
  }]
}];
app.use(express.json());
app.get('/',function(req,res){
const SubalKidenys=users[0].Kidneys;
const numberofKidneys=SubalKidenys.length;
let numberofHealthyKidneys=0;
for(let i=0;i<SubalKidenys.length;i++){
  if(SubalKidenys[i].healthy){
numberofHealthyKidneys=numberofHealthyKidneys+1;
  }
    
}
const numberofUnhealthyKidneys=numberofKidneys-numberofHealthyKidneys;
res.json({
  numberofKidneys,
  numberofHealthyKidneys,
  numberofUnhealthyKidneys
})
})
//go to postman and localhost:3002
//select post method
//go to body tab
//select raw and json
//in the text area write {"isHealthy":true} or false
//it adds a new kidney to the kidneys array with the healthy status based on the isHealthy value from the request body
//app.use(express.json())) is used to parse the JSON body of the request
//whenever you are calling post or put method you have to use app.use(express.json()))
app.post('/',function(req,res){
  const isHealthy=req.body.isHealthy;
  users[0].Kidneys.push({healthy:isHealthy});
  res.json({
    message:"New Kidney Added"
  })
})
//go to postman and localhost:3002
//select put method
//go to body tab
//select raw and json
//in the text area write {}
// all kidneys will become healthy
//it makes all kidneys healthy by iterating through the kidneys array and setting healthy to true
// if there are no kidneys it returns 411 status code with message
//whenever you are calling post or put method you have to use app.use(express.json()))
app.put('/',function(req,res){
  for(let i=0;i<users[0].Kidneys.length;i++){
    users[0].Kidneys[i].healthy=true;
  }
  res.json({message:"All Kidneys are now healthy"})
})
//go to postman and localhost:3002
//select delete method
//go to body tab
//select raw and json
//in the text area write {}
//it deletes all unhealthy kidneys by creating a new array with only healthy kidneys and replacing the old array
// if there are no unhealthy kidneys it returns 411 status code with message
app.delete('/',function(req,res){
  // only if atleast one unhealthy kidney is there do this, else return 411
  if(isAtleastOneUnhealthyKidney())

{
const newKidney=[];
  for(let i=0;i<users[0].Kidneys.length;i++){
    if(users[0].Kidneys[i].healthy)
    {
      newKidney.push({
        healthy:true
      }
      )

    }
  }
  users[0].Kidneys=newKidney;
  res.json(
    {
      message:"msg done"
    }
  )
} 
else
  {
    res.status(411).json({
      msg:"There is No Unhealthy Kidneys"
    })
  }   

})
function isAtleastOneUnhealthyKidney()
{
  let unhealthyKidney=false;
    for(let i=0;i<users[0].Kidneys.length;i++){
  if(!users[0].Kidneys[i].healthy)
  {
    unhealthyKidney=true;
  }
}
return unhealthyKidney;
}
app.listen(3002);