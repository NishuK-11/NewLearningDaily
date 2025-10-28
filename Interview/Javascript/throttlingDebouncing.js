//debouncing and throttling are techniques used in web development  to control the rate at which certain function or actions are executed in response to events like user input or browser events. 
//debounce use krke hmlog event ka jaldi response nhi dete hai
const debounce = (func, delay) => {
    let debouncing;
    return function(...args){
        let myargs;
        console.log(args);
        myargs = args;
        clearTimeout(debouncing);
        debouncing = setTimeout(() => {
            func(...myargs);
        }, delay);
    }
};
const callAPI = function(trem){
    console.log('API called for ', trem);
}
const debouncedAPI = debounce(callAPI, 2000);
document.getElementById('debounceBtn').addEventListener('input', function(e){
    debouncedAPI(e.target.value);
});
// Ye code debouncing concept dikhata hai — jisme ek function (callAPI) tabhi execute hota hai jab user input dena band kar deta hai aur ek fixed delay (2 seconds) beet jaata hai. Har nayi input pe purana timer cancel hota hai, taaki unnecessary API calls na ho aur performance smooth rahe.


//Throttle immediate response dene ke liye -> game mei button press etc.
const throttle = (func, limit) => {
    let isThrottling;
    return function(){
        const args = arguments;
        const ctx = this;
        if(!isThrottling){
            func.apply(ctx, args);
            isThrottling = true;
            setTimeout(() => {
                isThrottling = false;
            }, limit);
        }
    }
};
function shoot(){
    console.log('Shoot!');
}
const throttledShoot = throttle(shoot, 500);
document.getElementById('throttleBtn').addEventListener('click', throttledShoot);
// Ye code throttling concept dikhata hai — jisme ek function (shoot) sirf ek fixed interval (2 seconds) mein ek baar hi execute hota hai, chahe user kitni bhi baar button click kare. Isse performance improve hoti hai aur function overload nahi hota.

// Game me firing button (taaki ek hi click se multiple fire na ho)

// Window resize events (taaki har pixel resize pe code na chale)

// Scroll detection (smooth performance ke liye)