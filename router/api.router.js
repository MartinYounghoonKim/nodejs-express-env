const prefix = 'api';

module.exports = (app) => {
    app.get(`/${prefix}`, (req,res) => {
      res.send('[Success]: Lazy side api server!!');
    });   
  }