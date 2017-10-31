module.exports = (app)=>{
  app.all('/*', (req,res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
  app.get('/', (req,res) => {
    res.render('index',{ reference:"CrudBoard" });
  });
  app.get('/sub', (req,res) => {
    res.render('sub',{ reference:"CrudBoard" });
  });
}