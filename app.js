const express = require("express");
const app = express();
const cors = require('cors');
const port = 4000;
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');


app.use( bodyParser.urlencoded({extended:false}) );
app.locals.pretty=true;

/**
 * @param { handlebars template }
 * https://github.com/ericf/express-handlebars
 */
const handlebars = require('express-handlebars');
const hbs = handlebars.create();

/**
 * @param { views }: client views 설정
 */
app.set('views',path.join(__dirname, 'src/views'));
app.engine('handlebars', hbs.engine );
app.set('view engine', 'handlebars');

/**
 * @param { Router }: 각 페이지별 Router 
 */
app.use(cors());
const clientRouter = require('./router/client.router');
const apiRouter = require('./router/api.router');
clientRouter(app);
apiRouter(app);

/**
 * @param static 파일 경로 설정
 */
app.use(express.static('./src/assets'));

const server = app.use(express).listen(port, ()=>{
    console.log(`Express Server has started on port : ${port}`)
});