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
}//hoisting.js:29  undefined Uncaught TypeError: test2 is not a function
//normal function na likhkar function expression likha hai to ye error dega.
//kyuki function expression ko js engine utha ke top pe nhi le jata.


var x = 10;
function foo() {
    console.log(x);
    var x = 20;
}
foo(); //undefined
//output undefined kyuki js engine is code ko aise samjhta hai
/* 
🧠 What’s happening:

Global scope me x = 10

Function foo() me ek naya local variable x declare hota hai (var x)

Jab console.log(x) chalti hai:

Function ke andar apna hi x milta hai (local variable)

Wo declare to hai, par value assign nahi hui (so default = undefined)

Isliye output: undefined
var x = 10;

function foo() {
    var x;           // 👈 hoisting: variable declaration top pe chali gayi
    console.log(x);  // yahan x = undefined (kyunki abhi value assign nahi hui)
    x = 20;          // ab assign hua
}
foo();
function test() {
  console.log(a); // undefined
  // console.log(b); // ❌ ReferenceError
  // console.log(c); // ❌ ReferenceError
  var a = 1;
  let b = 2;
  const c = 3;
}
test();
*/

function show(){
    if(false){
        var a = 10;
        console.log(a);
    }
    console.log(a); //undefined
    console.log(b); //ReferenceError: b is not defined
}
show();

/*
| Feature                   | `var`                         | `let`             |
| ------------------------- | ----------------------------- | ----------------- |
| Hoisting                  | ✅ Yes                         | ✅ Yes             |
| Default Value             | `undefined`                   | ❌ (uninitialized) |
| Temporal Dead Zone        | ❌ No                          | ✅ Yes             |
| Scope                     | Function Scoped               | Block Scoped      |
| Access before declaration | ✅ Allowed (gives `undefined`) | ❌ ReferenceError  |
*/

/*
🔹 1️⃣ Function Scope (used by var)
function test() {
  var x = 10;
  if (true) {
    var y = 20;
  }
  console.log(x); // ✅ 10
  console.log(y); // ✅ 20 (accessible)
}
test();
console.log(x); // ❌ Error: x is not defined

🧠 Explanation:

var ka scope poora function hota hai.
Agar var function ke andar kahi bhi likha ho (if, for, etc. ke andar bhi),
wo poore function me visible hota hai.
Function ke bahar se access nahi kar sakte.


2️⃣ Block Scope (used by let and const)

function test() {
  let x = 10;
  if (true) {
    let y = 20;
    console.log(y); // ✅ 20
  }
  console.log(x); // ✅ 10
  console.log(y); // ❌ Error: y is not defined
}
test();

🧠 Explanation:

let aur const sirf uss block {} ke andar valid hote hain jahan declare hue.
if, for, while, {} sab apna block banate hain.
Bahar se access karne par ReferenceError aata hai.

*/
var pname = "name1";
function printName(){
    pname = "name2"; //without var/let/const -> it will look for variable in outer scope and modify it.
    if(1==2){
        //js enfine hoisting krega aur var pname; oopar leke chla jayega
        var pname = "name3"; //function scope
    }
}
printName();
console.log(pname); //name1