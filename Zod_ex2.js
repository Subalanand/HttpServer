//zod is a typescript library for schema validation
//it can be used to validate the input data
//it can be used to validate the output data  
//npm install zod

const zod=require('zod');
const express=require('express');
const app=express();
app.use(express.json())
function validateInput(obj)
{
  //schema is a blueprint of the object
  //it defines the structure of the object
  //it defines the type of each property
  //zod.object is used to define an object schema
  //zod.string(),zod.number(),zod.boolean() are used to define the type of the property
  //zod.string().email() is used to define a string property that should be an email
  //zod.string().min(8) is used to define a string property that should have a minimum length of 8
  const schema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(8),
  })
  //safeParse is used to validate the object against the schema
  //it returns an object with two properties success and data or error
  //if the validation is successful success is true and data contains the validated object
  //if the validation fails success is false and error contains the error message
return(schema.safeParse(obj));
  
}
app.post('/', function(req, res) {
  const result = validateInput(req.body);
  if (!result.success) {
    return res.status(400).json({ error: result.error });
  }
  res.send("Input Validated");
  console.log(result.data); // Print to terminal
});
app.listen(3000);

