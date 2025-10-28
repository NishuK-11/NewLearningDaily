//function transformed into sequence of function each taking a single argument.
//Non-currying function
function add(a,b,c){
    return a + b + c;
}

//currying function
function curryAdd(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }   
}
console.log(add(2,3,4)); //9
console.log(curryAdd(2)(3)(4)); //9
 const curryAddVer2 = (a) => (b) => (c) => a + b + c;
    console.log(curryAddVer2(5)(6)(7)); //18

    //shop mei discount dena
function DressPrice(price){
    return function(discountPer){
        return price - (price * discountPer / 100);
    }
}
const dress1 = DressPrice(100); //dress1 is a function which takes discount percentage
console.log(dress1(10));