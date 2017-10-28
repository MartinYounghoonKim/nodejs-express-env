module.exports = (app)=>{
    app.get('/board', (req,res) => {
      res.send('Board');
    });   
  }