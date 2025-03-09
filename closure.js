// function   init(){ ///outer function
//     let name ="poornima batham"

//     function displayName(){ //inner function
//         console.log(name)
//     }
//     displayName()  //calling inner function

// }

// init();

//Theory proved
// 1.
// function outer(){
//      let userName = 'poornima batham'
// }
//   console.log(userName)  //give error UserName is not defined becuse it is declare inside the scopr of outer

2;

function outer() {
  let userName = "poornima batham";

  function inner() {
    console.log("inner fun", userName);
  }
  return inner;
}
const call = outer();
console.log("outer fun", call());
