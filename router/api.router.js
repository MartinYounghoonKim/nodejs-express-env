/**
 * @param { mysql }: Database connection
 */
// const mysql = require('mysql');
// const dbconfig   = require('../config/database.config');
// const connection = mysql.createConnection(dbconfig);
// connection.connect();

const prefix = 'api';

module.exports = (app) => {
  app.get(`/${prefix}`, (req,res) => {
    res.send('[Success]: Lazy side api server!!');
  });   
}