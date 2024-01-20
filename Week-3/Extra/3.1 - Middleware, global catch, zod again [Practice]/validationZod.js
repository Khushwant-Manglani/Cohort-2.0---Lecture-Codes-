const express=require('express');
const app=express();
const { z } = require('zod');

const details = {
  username: z.string().min(3),
  password: z.string().min(6),
  age: z.number(),
  email: z.string().email(),
  country: z.literal('IN').or(z.literal('US')),
  kidney: z.array(z.number()),
}

const detailSchema=z.object(details);

app.use(express.json());

app.post('/check', (req, res) => {
  const result = detailSchema.safeParse(req.body);
  
  if(result.success) {
    res.json({ msg: 'Success', details: result });
  } else {
    res.status(400).json({ msg: 'Invalid details', details: result });
  }

});

app.listen(3000);