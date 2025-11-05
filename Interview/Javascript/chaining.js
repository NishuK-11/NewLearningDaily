console.log("chaining....");
//calculate().sum(5,10).subtraction(3).add(4).multiply(10).value()

const calculate = {
    value:0,
    add(no){
        this.value = this.value + no
        return this;// this mtlb jo isko call kiya h, call calulate kiya hai, to this mei calculate h abhi
    },
    multiply(no){
        this.value = this.value*no;
        return this;
    },
    getValue(){
        return this.value;
    },
    sum(arr){
        const total = arr.reduce((acc,next) => acc+next,0);
        this.value = this.value + total;
        return this;
    }
}
let ans = calculate.add(4).add(2).multiply(3).sum([3,4]).getValue();
console.log(ans);
// console.log(ans.value);

class calculator{
    constructor(){
        this.value=0;
    }
     add(no){
        this.value = this.value + no
        return this;// this mtlb jo isko call kiya h, call calulate kiya hai, to this mei calculate h abhi
    }
    multiply(no){
        this.value = this.value*no;
        return this;
    }
    getValue(){
        return this.value;
    }
    sum(arr){
        const total = arr.reduce((acc,next) => acc+next,0);
        this.value = this.value + total;
        return this;
    }
}
const calulate = new calculator();
const result = calulate.add(4).multiply(10).sum([2,3]);
console.log(result);