import express from 'express';

const app = express();
const port = 3333;

app.use(express.json());

app.get('/', (request, response)=>{
  response.send({message: 'Hello'});
})

app.listen(port,()=>{
  console.log(`NodeJS listening on port ${port}`)
})