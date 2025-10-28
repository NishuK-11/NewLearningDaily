// hoisting in javascript deafault behaviour of moving declarations to the top.
// why? because js has to allocate memory for variables. 
// var a;
// console.log(a);//undefined-> memory alocated h
// a=9;

//js engine function ko uthayega aur top pe move kr dega
// test();
// function test(){
//     console.log("inside test function");
// }

// debugger;
// console.log(a1);
// console.log(b1);
// console.log(c1);
// var a1=5;
// let b1=10; //ReferenceError: Cannot access 'b1' before initialization
// // let and const bhi hoisting hoti hai but uninitialized rehti hai until declaration is evaluated.
// // ye temporal dead zone karke hota hai. jab tak line execute nhi hoti tab tak access nhi kr skte.
// const c1 =15;
//let and const ko temporal dead zone kehte hai.
test();
function test(){
    console.log("inside test function");
}

//isi ko ek aur tarreke se
test2();
var test2 = function(){
    console.log("inside test2 function");
}