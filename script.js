$(function() {

  var urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
  ];
  
  var p1 = $.get(urls[0]);
  var p2 = $.get(urls[1]);
  var p3 = $.get(urls[2]);
  var p4 = $.get(urls[3]);
  var p5 = $.get(urls[4]);

//Exercise 1 - Chain Promises
$.get(urls[0])
  .then(function(value) {
    console.log(value);
    return $.get(urls[1]);
  })
  .then(function(value) {
    console.log(value);
    return $.get(urls[2]);
  })
  .then(function(value) {
    console.log(value);
    return $.get(urls[3]);
  })
  .then(function(value) {
    console.log(value);
    return $.get(urls[4]);
  })
  .then(function(value) {
    console.log(value);
  })
  .catch(function(error) {
    console.log("error");
  });

  //Exercise 2 - All promises at once
  Promise.all([p1,p2,p3,p4,p5])
    .then(function(responses) {
      console.log(responses[0]);
      console.log(responses[1]);
      console.log(responses[2]);
      console.log(responses[3]);
      console.log(responses[4]);
      console.log("all the data was fetched!")
    })
    .catch(function(error) {
      console.log("Error",error);
    })

   //Excercise 3 - Resolve, reject
   function addNumbers(x,y) {
     let p = new Promise(function(resolve,reject){
      if ( !(isNaN(x) ||  isNaN(y)) ) {
        resolve( x + y);
      } else {
        reject("Need to provide 2 numbers for this function");
        }
     })
     return p;
    }

  let x = 2;
  let y = 3;
  addNumbers(x,y) 
   .then(value => console.log(value))
   .catch(errMessage => console.log(errMessage))

   //Exercise 4 - Promisfy challenge question
   function dropToastPromisified() {
     let p = new Promise(function(resolve,reject) {
       let drop = Math.random();
       if (drop < 0.5) {
          console.log("Landed butter-side up!");
          resolve();
       } else {
         console.log("Landed butter-side down...");
         reject();
       }
     });
     return p;
   }


   dropToastPromisified()
   .then(()=>{
      alert('Whew, that was close!');
   }).catch(()=>{
      alert('Well shucks, there goes my toast...');
   });


})
