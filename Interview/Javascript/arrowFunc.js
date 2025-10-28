function add(a, b) {
    return a + b;
}
add(2, 3); //5
const add2 = (a, b) => {
    return a + b;
}
add2(4, 5); //9


function Add(){
    console.log(arguments);
    // let a = arguments[0];
    // let b = arguments[1];
    const[a,b]  = arguments;
    console.log("sum is",a+b);
}
Add(3,4);

/**
 
//ARROW FUNCTION MEIN ARGUMENTS OBJECT NHI HOTA
const Add3 = () => {
    console.log(arguments);
}
Add3(5,6); //error

 */


//Solution -> rest operator
const Add4 = (...args) => {
    console.log(args);
    const[a,b] = args;
    console.log("sum is",a+b);
}

//ARROW FUNCTION MEIN THIS KEYWORD NHI HOTA
/**\
const Person2 = (name, age) => {
    this.age = age;
    this.name = name;
}
const obj2 = new Person2('Doe', 25);
console.log(obj2.name); //undefined 
 */

//Solution -> use normal function for constructor
const Person3 = function(name, age){
    console.log(this);
    this.age = age;
    this.name = name;
}
const obj3 = new Person3('Smith', 28);
console.log(obj3.name);

const obj = {
    name: 'Alice',
    greet: function(){
        console.log(this);
        console.log(`Hello, my name is ${this.name}`);
        const innerFunc = () => {
            console.log(this);
        }
        innerFunc();
    }
}
obj.greet(); //Hello, my name is undefined
