module.exports = (app)=>{
  app.get('/', (req,res) => {
    res.render('index',{ reference:"Main" });
  });
  app.get('/sub', (req,res) => {
    res.render('sub',{ reference:"Sub" });
  });
}