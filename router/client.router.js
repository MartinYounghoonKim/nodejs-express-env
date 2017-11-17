module.exports = (app, connection)=>{
  app.get('/', (req,res) => {
    res.render('index',{ reference:"Main" });
  });
  app.get('/sub', (req,res) => {
    res.render('sub',{ reference:"Sub" });
  });
  app.get('/admin', (req,res) => {
    let inquerySql = 'SELECT * FROM lazyside_admin';
    connection.query(inquerySql, (err,result, fields)=>{
        if(err) {
            console.log(err);
            res.status(500).send("Error");
        } else {
            res.send(result);
        }
    })
  });
}