/*
callback is a function passed as a argument function.
callback functions are used when there is an asynchronous process
*/
function getSquare(n){
    setTimeout(()=>{
        return n*n;
    },1000)
}

console.log(getSquare(2)) //undefined

function getSquared(n,callback){
    setTimeout(()=>{
        callback(n*n);
    },1000)
}
getSquared(2,(result)=>{
    console.log(result);
    getSquared(result,(result2)=>{
        console.log(result2);
        getSquared(result2,(final)=>{
            console.log(final);
        })
    })
})
//callback hell -> hard to maintain
  

//inversion of control
function getUserDetail(cb){
    setTimeout(()=>{
        cb({userName:"ramesh",userId:"123"})
    },1000)
}
function getPosts(userid,cb){
    setTimeout(()=>{
        cb(['post1','post2'])
    },1000)
}
getUserDetail((userDetails)=>{
    console.log(userDetails)
    //getpost dependent hai geyUserDetail pe
    getPosts(userDetails.userId,(post)=>{
        console.log(post);
    })
})