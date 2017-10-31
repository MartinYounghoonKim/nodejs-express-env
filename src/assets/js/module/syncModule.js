import promise from 'promise';

export default ()=>{
  return new Promise(resolve => {
    promise()
    .then( res => {
      resolve(res);
    })
  })
}


