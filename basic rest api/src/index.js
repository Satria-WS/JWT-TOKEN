import express from 'express';
import userRoutes from "./routes/users.js"
const app = express();

//pettern pembuatan app , pattern routing
//app.method(path,handler);


// app.use('/', (req,res,next) => {
//   res.send('Hello world');
// })

//middle ware
app.use( (req,res,next) => {
  console.log('log succesfully');
  next();//akan terjadi infininte loading jika tidak memaki function ini
})
app.use( (req,res,next) => {
  console.log('log second succesfully');
  next();//akan terjadi infininte loading jika tidak memaki function ini
})


app.get('/', (req, res) => {
  // res.send('Hello get method');
  res.json({
    message: 'Hello'
  })
})

app.post('/', (req,res) => {
  res.send('Hello post method');
})

//grouping routes
app.use('/users' , userRoutes)

const port = 4000
app.listen(port, () => {
  console.log('Server succesfull on port ' + port)
})