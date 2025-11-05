// console.log('promises');

// const myPromises = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const randomNumber = Math.random()
//         if(randomNumber<0.5){
//             resolve(randomNumber)
//         }
//         else{
//             reject("Operation Failed")
//         }
//     },500)
// })

// myPromises.then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("this will always run");
// })


function getSquare(n){
    const promise = new Promise((res,rej)=>{
        setTimeout(()=>{
            if(n%2==0) res(n*n)
            else rej("cant calculate square for odd numbers")
        },1000)
    })
    return promise
}
// getSquare(2).then((result)=>{
//     return getSquare(result)
// })
// .then((result2)=>{
//     console.log(result2)
// }).catch(err=>{
//     console.log(result2)
// })

async function getData() {
    try{
        const res = await getSquare(3)
        console.log(res)
    }catch(err){
        console.log(err)
    }finally{
        console.log("this code will always run")
    }
}
getData();

//then-catch aur async-await mei antar
//await lga do to wo pehle reslove hone ka wait krta hai ye nhi ki aage ka code chla diye, pr then-catch bolega ye run ho rha hai jb tk aage ka dekho
