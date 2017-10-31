const syncModule = () => {
  return new Promise( (resolve)=> {
    setTimeout(()=>{
      resolve('sync Success');
    },1000 );
  })
}

export default syncModule;