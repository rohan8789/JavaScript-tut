/*
    Async and await is used to handle promises.
*/

let p = new Promise(function(resolve, reject){
    resolve("Promise is resolved successfully");
    return p;
});

async function getData02(){
    let res=await p;
    console.log(res);
}

/*
    //That's how we resolve a promise w/o async/await
    function getData01(){
        p.then(function(res){
            console.log(res);
        })
    }
*/
// getData01();
getData02();
