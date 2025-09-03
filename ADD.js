const express = require('express');

function add(n){
  let sum=0;
  for(let i=0;i<n;i++){
    sum=sum+i;
  }
  return sum;
}
const app = express();
app.get('/', function(req, res) {
  const n=req.query.n;
  const ans= add(n);
  res.send("The sum is " + ans.toString());
});
app.listen(3001);