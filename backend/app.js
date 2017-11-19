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
 * @param { mysql Connection }
 * https://github.com/ericf/express-handlebars
 */
const mysqlConfig = require('./config/database.config');
const mysql = require('mysql');
// const connection = mysql.createConnection(mysqlConfig);
// connection.connect();

/**
 * @param { Router }: 각 페이지별 Router 
 */
app.use(cors());
const apiRouter = require('./router/client.router');
apiRouter(app);

const server = app.use(express).listen(port, ()=>{
    console.log(`Express Server has started on port : ${port}`)
});