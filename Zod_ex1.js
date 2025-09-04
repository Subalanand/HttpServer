const zod=require('zod');
function validateInput(arr)
{
  const schema=zod.array(zod.number());
  const respone=schema.safeParse(arr);
  console.log(respone);
}
validateInput([1,2,3,4,5]);
//validateInput([1,2,'3',4,5]); success false,error :zod array expected number, received string at index 2
//validateInput([1,2,3,'four',5]);success false,error :zod array expected number, received string at index 3