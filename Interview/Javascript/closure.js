// let count = 0;
// function increment(){
//     count = count+1;
//     return count;
// }

// console.log(increment());
// console.log(increment());
// console.log(increment());

//hmlog chahte hai count bs increment ke andar hi rhe(count ko koi doosra part modify nhi kr skta), bahar phir se uski value 0 hi ho jaye. isko bolte hai encapsulation. iske liye hum closure ka use karte hai.
function makeIncrementer(){
    let count = 0;
    // function increment(){
    //     count = count+1;
    //     return count;
    // }
    // return increment;

    return function(){
        count = count+1;
        return count;
    }
}
const incrementer = makeIncrementer();
console.log(incrementer());
console.log(incrementer());
console.log(incrementer());
//ab count variable sirf increment function ke andar hi accessible hai, bahar se koi access nhi kr skta.
// 🔹 Step 2: Closure kya karta hai?
// Closure ka matlab hai:
// “Inner function ke paas apne parent function ke variables ka access rehta hai, even after parent function return ho chuka ho.”
// Yani increment() function ke paas count variable ka reference hamesha bana rahega.


//Memoization 
function memoizedAdd(){
    let cache = {};
    return function(value){
        if(value in cache){
            console.log('Fetching from cache');
            return cache[value]; //30
        }
        else{
            console.log('Calculating result');
            let result = value + 20;
            cache[value] = result; //10->30 
            return result;
        }
    }
}
const add = memoizedAdd();
console.log(add(10)); //30
console.log(add(10));
console.log(add(20));
console.log(add(20));

// Q1️⃣

// 👉 Closure kya hota hai simple shabdon mein?
// (b) Function jo apne parent scope ke variable ko yaad rakhta hai


function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  }
}

const c1 = createCounter();
const c2 = createCounter();

console.log(c1());
console.log(c1());
console.log(c2());

// 🔹 Step 1: const c1 = createCounter();

// Yahaan createCounter() call hua.

// Iske andar let count = 0; bana.

// Aur inner function return hua.

// Abhi tak inner function execute nahi hua, sirf return hua.

// ❌ count abhi bhi 0 hi hai, increment tab hoga jab c1() call karoge.

// 🔹 Step 2: console.log(c1());

// Ab c1() call hua → inner function execute hua.

// count (jo pehle 0 tha) increment hua:
// ++count → 1

// Output: 1
