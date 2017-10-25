

const express = require("express");
const app = express();
const port =4000;
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.locals.pretty=true;
app.set('views','./views');
app.set('view engine' 'ejs');
app.engine('html', require('ejs').renderFile);
//express.static('public')

const server = app.use().listen(port, ()=>{
    console.log(`Express Server has started on port : ${port}`)
});
