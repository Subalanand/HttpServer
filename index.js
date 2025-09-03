const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
//const port=process.env.PORT || 3000
app.use(bodyParser.json()) // for parsing application/json
app.get('/route-handler', function(req, res) {
  res.json({
    name: 'Subal Anand',
    age:22
  })
})//localhost:3000/converesations
//localhost:3000/converesations?message="My Name is Subal Anand"
app.post('/conversations',(req,res)=>{
  //console.log(req.headers)
  //console.log(req.body)
  //const message=req.body.message
  const message=req.query.message
  console.log(message)
  res.send({
    msg:"2+2=5"
  })
  })
app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.listen(port)