// | Concept       | Description                                                 |
// | ------------- | ----------------------------------------------------------- |
// | `resolve()`   | Promise successfully complete hota hai                      |
// | `reject()`    | Promise fail hota hai                                       |
// | `await`       | Promise ka result return karta hai ya error throw karta hai |
// | `try...catch` | Error ko safely handle karta hai bina program crash kiye    |


// const promises = new Promise((resolve,rej)=>{
//     const randomNumber = Math.random();
//     setTimeout(()=>{
//         if((randomNumber*10)%2==0){
//             resolve(true)
//         }
//         else{
//             rej(false)
//         }
//     },1000)
// })

// async function getBool() {
//     //const res = await promises();//promises is not a function — it’s already a Promise object.
//     // const res = await promises;
//     // console.log(res);
//     // const res2 = await promises;
//     // console.log(res2);

//        try {
//         // const res = await promises;
//         // console.log(res);
//         // const res2 = await promises;
//         // console.log(res2);

//         //yahan dekhne wali baat ye h ki api call ek-doosre pe dependent nhi hai
//         const res = await Promise.all([getBool(),getBool()])
//         console.log(res);
//     } catch (err) {
//         console.log("❌ Promise Rejected:", err);
//     }
// }
// getBool();



function checkEvenOdd(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 2 === 0) {
        resolve(`${num} is even ✅`);
      } else {
        reject(`${num} is odd ❌`);
      }
    }, 1000);
  });
}


async function getData() {
  try {
    const res = await Promise.all([
      checkEvenOdd(8),
      checkEvenOdd(6)
    ]);
    console.log(res); // this will run only if ALL promises resolve
  } catch (err) {
    console.log("❌ One of the promises failed:", err);
  }
}

getData();