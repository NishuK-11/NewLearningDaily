// console.log("Event bubbling...");
// const card = document.getElementById("card");
// const btn = document.getElementById("button");
// card.addEventListener("click",()=>{
//     console.log("Card clicked");
// })
// btn.addEventListener("click",(event)=>{
//     console.log("button clicked");
// });

//event bubbling mtlb ki jb hum button pe click krenge to pehle button ka event chalega fir uske parent ka fir uske parent ka...
//ab agr parent to child event chlwana hai to hm true,true kr denge
// console.log("Event bubbling...");
// const card = document.getElementById("card");
// const btn = document.getElementById("button");
// card.addEventListener("click",()=>{
//     console.log("Card clicked");
// },true)
// btn.addEventListener("click",(event)=>{
//     console.log("button clicked");
// },true);
//ab jaise e commerce wesite pe image pe click krne pe ho skta hai doosre jgh naigate ho aur add to wishlist button pe click hone pr koi doosra event ho
//to uske liye hmei ek hi event chlana hai so will do e.stopPropagation()


console.log("Event bubbling...");
const card = document.getElementById("card");
const btn = document.getElementById("button");
card.addEventListener("click",()=>{
    console.log("Card clicked");
})
btn.addEventListener("click",(event)=>{
    event.stopPropagation();
    console.log("button clicked");
});