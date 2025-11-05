console.log("Call Apply Bind...");
const per1 = {
    name:"nishu",
    age:20
}
const per2 = {
    name:"rahul",
    age:21
}
function introduce(status,salary){
    console.log(`My name is ${this.name}, age is ${this.age}, status is ${status} and salary is ${salary}`);
}
introduce.call(per1,"single",20000); // call method
introduce.apply(per2,["married",30000]); // apply method(array leta h second argument)
//bind directly use nhi krta h
const introducePer1 = introduce.bind(per1,"complicated",25000);
introducePer1(); // bind method