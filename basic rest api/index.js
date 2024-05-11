import express from 'express';

const app = express();

//pettern pembuatan app , pattern routing
//app.method(path,handler);
// app.use('/', (req,res,next) => {
//   res.send('Hello world');
// })

app.get('/', (req, res) => {
  res.send('Hello get method');
})

app.post('/', (req,res) => {
  res.send('Hello post method');
})

const port = 4000
app.listen(port, () => {
  console.log('Server succesfull on port ' + port)
})