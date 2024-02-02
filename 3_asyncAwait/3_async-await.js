/*
    Async and await is used to handle promises.
*/

let p = new Promise(function (resolve, reject) {
    setTimeout(function(){
        resolve("Promise is resolved successfully");
    },6000);
});
/*
*/
async function getData02() {
    //js engine waits for promise to be resolved.
    let res = await p;
    console.log(res);
    console.log("nameste js");
}
getData02(); //Time, Tide waits for none. But JavaScript will have to wait.
/*

function getData01(){
    //JavaScript engine will not wait for promise to be resolved.
    p.then(function(res){
        console.log(res);
    })
    console.log("nameste js");
}
getData01(); //Nameste JS printed first. Time, Tide and JavaScript waits for none.

*/