console.log("sort");
const prices = [400,100,200,50,600];
//ascending order
prices.sort();
//sort method string ko compare krta h by default uske hisaab se 1 pehle aayega 2 se ... isliye output aisa aa rha h
console.log(prices);
//compare function dalte h andar ab
prices.sort((a,b)=>{
    /*
    +ve -> b will come first
    -ve -> a will come first
    0   -> keep the original order of a and b
    */
//    if(a>b){
//     return 1; //b will come first
//    }
//    else if(a<b){
//     return -1;
//    }
//    else
//     return 0;

    return a-b;
})
console.log(prices);

const fruits = ["orange","apple","banana","mango"];
fruits.sort();
console.log(fruits);
//jb english letter na ho tb(jaise e ke oopar .)
fruits.sort((a,b)=>{
    return a.localeCompare(b);
})
console.log(fruits);