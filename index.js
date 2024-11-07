const express = require('express')
const app = express()
var bodyParser = require('body-parser');

const router1 = require('./apiRouter.js');

app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())

app.get('/',(req,res) => {
  res.send('Hello');
})
app.use('/api/', router1);

app.listen(3000, () => {
  console.log(`Example app listening on port`)
})