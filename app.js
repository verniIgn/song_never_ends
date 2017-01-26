'use strict'


const port = process.env.PORT || 3000;
const express = require('express');
const app = express();
const routes = require('./routes/routes.js');
// set the view engine to ejs
app.set('view engine', 'ejs');



app.use(routes);

app.use(express.static('images')); 


app.listen(port, function () {   
  console.log("Starting a server on localhost:", port); 
});