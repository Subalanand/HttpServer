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

app.post('/',function(req,res){
  const isHealthy=req.body.isHealthy;
  users[0].Kidneys.push({healthy:isHealthy});
  res.json({
    message:"New Kidney Added"
  })
})

app.put('/',function(req,res){
  for(let i=0;i<users[0].Kidneys.length;i++){
    users[0].Kidneys[i].healthy=true;
  }
  res.json({message:"All Kidneys are now healthy"})
})

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