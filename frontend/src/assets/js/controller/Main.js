define([], function(){
  requirejs([
    'axios'
    ,'es6!apiCore'
  ], function(axios,API_CORE){
    axios.get('http://18.216.71.122:4000/api')
    .then( res =>{

      //통신 성공시
      if(res.status === 200){
        console.log( res );
      }
    });
  });
}) 