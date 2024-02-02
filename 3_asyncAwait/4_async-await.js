/*
    What do you think will the output of below program?
    will program wait for 12 sec in total, 6 for first resolve, 6 for second resolve.
*/

let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Promise is resolved successfully");
    }, 6000);
});

async function getData02() {
    console.log("hello world");
    const res1 = await p;
    console.log(res1);
    console.log("nameste js-1");
    const res2 = await p;
    console.log(res2);
    console.log("nameste js-2");
}
getData02(); 

