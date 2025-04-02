const promiseone = new Promise ( function (resolve, reject){
    setTimeout( function(){
      console.log('deepak kumar');
      reject()
    }, 1000)
  });
//   console.log(promiseone);

promiseone.then( () => {
    console.log('promise one resolve');
    
}).catch ( (error) => {
    console.log('someting went wrong');
    
}).finally( () => {
    console.log('finally resolved');
    
})
  