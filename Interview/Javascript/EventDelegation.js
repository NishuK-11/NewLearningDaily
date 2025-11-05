//event trigger krenge innermost element pe pr handle krenge outermost element pe
console.log("Event bubbling...");

const table = document.getElementById("timesheet");
const submit = document.getElementById("submit");
table.addEventListener("click",(event)=>{
    console.log("Table clicked");
    console.log(event);
    console.log(event.target.innerText); //jo element pe click kiya h usko btayega
})
const filledHours ={}
table.addEventListener("input",(event)=>{
    console.log(event.target.name,event.target.value);
    filledHours[event.target.name] = event.target.value;
})
submit.addEventListener("click",(event)=>{
    console.log("Submitted data:",filledHours);

});