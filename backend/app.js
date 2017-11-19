const express = require("express");
const app = express();
const cors = require('cors');
const port = 3000;
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

app.use( bodyParser.urlencoded({extended:false}) );
app.locals.pretty=true;

/**
 * @param { Router }: 각 페이지별 Router 
 */
app.use(cors());
const userRouter = require('./router/user.router');
app.use('/users', userRouter);

const server = app.use(express).listen(port, ()=>{
    console.log(`Express Server has started on port : ${port}`)
});