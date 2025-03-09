// // var age = 24

// // if(true){
// //     age = 45
// //     console.log(age)
// // }
// // console.log(age)

// // let age1 = 24

// // if(true){
// //     age1 = 45
// //     console.log(age1)
// // }
// // console.log(age1)
// var age2 = 95  // this is global scope


// function solve(){
//     var age2 = 45
//     console.log(age2)
// }

// console.log(age2) //age2 is not defined  this is call function scope var age is declare inside the function here

// solve()
// var a =8
// var a =9
// //var can be redeclare
// console.log(a)

// let ag3  // only block scope available {}

// {
//     let age4 =89
//     console.log(age4)
// }

// // console.log(age4) //give er age4 is not defined because let  is v blocked scopre variable can't be redeclare
//  let age5 = 23
//  age5 ="poornima"
//  age5 = true
//  age5 = null
//  //here age  has multiple type  it is called dynamic typed language

//  const Age = 299
//  Age ="009909" // give error 
//  console.log(Age)

// //  variable naming convention
// //Dataypes in js
// primitive = Number,string,Boolean,undefined
// let age // only defined value is not assign
//non-primitve data = Null,bigint,Symbol

// let a1 = 12

// if(a1==12){
//     console.log("poor")
// }else if(a1>2){
//     console.log("poornioms")
// }else{
//     console.log("ereoropei")
// }


function memoize(fn) {
    const cache = {};
    return function (...args) {
        console.log(...args,"args")
      const key = JSON.stringify(args);
      console.log(...args,"key",)

      if (cache[key]) {
        console.log("Fetching from cache:", key);
        return cache[key];
      } else {
        console.log("Calculating result for:", key);
        const result = fn(...args);
        cache[key] = result;
        return result;
      }
    };
  }
  
  // Example usage:
  function add(a, b) {
    return a + b;
  }
  
  const memoizedAdd = memoize(add);
  
  console.log(memoizedAdd(2, 3)); // Calculates and returns 5
  console.log(memoizedAdd(2, 3)); // Fetches from cache and returns 5

//   Practice set 1
//   let n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = "* ";
//     console.log(str.repeat(i));
// }

// Dry run
// i =1
// *
// i = 2
// // **
// i = 3
// ***
// i=4
// // ****
// i=5
// // *****

//   Practice set 2

// let n = 5;
// for (let i = 5; i <= 0; i--) {
//     let str = "* ";
//     console.log(str.repeat(i));
// }



let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "* ";
    let space  = '  ';
    console.log(space.repeat((n-i))+str.repeat(i));
}

// 