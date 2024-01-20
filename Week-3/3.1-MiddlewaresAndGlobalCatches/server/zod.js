const express=require('express');
const z=require('zod');
const app=express();
const port=3000;

const schema=z.array(z.number());
// 
// {
//    email: string => email
//    password: string => atleast 8 letters
//    country: "IN" or "US"
// }
//
const schema1 = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  country: z.literal("IN").or(z.literal("US")),
  kidneys: z.array(z.number())
})


app.use(express.json());

app.post('/kidney-check', function(req, res) {
  const kidneys=req.body.kidneys;
  const response=schema.safeParse(kidneys);
  if(!response.success) {
    res.status(411).json({
      message: "Invalid inputs plz try again!"
    });
  } else {
    res.json({
      response
    });
  }
});


app.listen(port);