// const promiseone = new Promise ( function (resolve, reject){
//     setTimeout( function(){
//       console.log('deepak kumar');
//       reject()
//     }, 1000)
//   });
// //   console.log(promiseone);

// promiseone.then( () => {
//     console.log('promise one resolve');

// }).catch ( (error) => {
//     console.log('someting went wrong');

// }).finally( () => {
//     console.log('finally resolved');

// })

const promisethree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("hey promise three");
    let error = false;
    if (!error) {
      resolve({
        username: "deepak",
        age: 22,
        password: "deepak1000@",
      });
    } else {
      reject("ERROR: Something Wnt Wrong");
    }
  }, 2000);
});
 
promisethree
  .then((user) => {
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally consumed");
  });

// async function getalluser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(typeof data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getalluser();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);  
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {});
