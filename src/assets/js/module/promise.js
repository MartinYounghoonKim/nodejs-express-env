/**
 * 
 */
// $.ajax({
//   url:'http://18.216.71.122:4000/',
//   type:'GET',
//   success:function(data){
//       console.log(data)
//   }
// })

const syncModule = () => {
  return new Promise( (resolve)=> {
    setTimeout(()=>{
      resolve('sync Success');
    },1000 );
  })
}

export default syncModule;