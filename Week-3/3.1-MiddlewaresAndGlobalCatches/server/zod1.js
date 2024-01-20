const z=require('zod');

function validateInput(obj) {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });
  const response=schema.safeParse(obj);
  console.log(response);
}

validateInput({
  email: "Khushmanglani@gmail.com",
  password: "123734643"
});

