/**
 * @param { requireconfig }: 각 페이지의 library/module의 config 설정
 */
requirejs.config({
  baseUrl: '/js',
  config: {
    es6: {
      resolveModuleSource: function(source) {
        return 'es6!'+ source;
      }
    }
  },
  paths:{
    //Library for app
    'babel': 'library/babel'
    ,'es6': 'library/es6'
    ,'axios': 'library/axios.min'

    //Controller for app
    ,'Main': 'controller/Main'

    //Config for app
    ,'apiCore': 'config/api.core'

    //Module for app
    ,'foo': 'module/foo'
    ,'bar': 'module/bar'
    ,'foobar': 'module/foobar'
    ,'syncModule': 'module/syncModule'
    ,'promise': 'module/promise'
  }
});
requirejs([], function(){
  const Controller = document.body.dataset.controller;
  requirejs([Controller]);
});

// requirejs(['es6!foobar','es6!syncModule'], function(foobar,syncModule){

//   foobar();
//   //promise pattern
//   syncModule()
//   .then( res => {
//     console.log(res);
//   })
// });