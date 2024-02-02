/*  How to block main thread in js  */
console.log("start");

setTimeout(function cb(){
    console.log("Timer");
},5000);

console.log("Lets block main thread");

let startdate=new Date().getTime();
for(let i=1; i<=10; i++){
    console.log(new Date().getTime());
}
let endDate=startdate;
while(endDate<startdate+10000){
    endDate+=new Date().getTime();
}

console.log("While expires");
/*
    GEC created, start will be printed. setTimeout will register the callback func cb in webapi env. and
    timer will start. then end will be printed. Then we will go inside while loop which takes 10 sec to
    expire. meanwhile the timer expires and waits inside callback queue. 
    hence, while loop ends and prints "while expires and timer".
*/