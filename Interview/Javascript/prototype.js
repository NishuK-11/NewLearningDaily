console.log('prototype...');
//. lagane ke baad hmlog ko bhut saare methods milte h
const arr = [1,2,3,4,5];
console.log(arr);
console.log(arr.__proto__);
//kl ko agr sum method add krna h to hm log kr skte h __proto__ me daal ke

//arr.reduce((accumulator,currentValue)=> accumulator+currentValue,initialValue);
//this refers to jo usko call kr rha h
Array.prototype.sum = function(){
    return this.reduce((accumulator,currentValue)=> accumulator+currentValue,0);
}
console.log(arr.sum());
//ab hm function prototype me bhi method add kr skte h
Function.prototype.mynewmethod = function(){
    console.log("This is my new method added to function prototype");
}
function Add(){
    console.log("This is Add function");
}
Add.mynewmethod();


Date.prototype.getLastYear = function(){
    const currentYear = new Date().getFullYear();
    return currentYear - 1;
}
const date = new Date();
console.log("Last Year was:",date.getLastYear());

function Animal(name,age){
    this.name = name;
    this.age = age;
}
const dog=new Animal("Tommy",5);
console.log(dog);
Animal.prototype.speak = function(){
    console.log(`${this.name} says Woof Woof`);
}
dog.speak();