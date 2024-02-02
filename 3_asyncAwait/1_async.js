/*
  This is a promise killer.

  What is async.
  what is await.
  How async/await work behind the scenes.
  Example of using async/await
  Error handling
  Interviews
  Async/await vs promises
*/

/*
  Async is a keyword to create async functions. It always returns a promise. If you return a value, 
  it wraps value inside a promise and return.
*/
const p = new Promise(function(resolve,reject){
  resolve("Promise is resolved");
  return p;
})

async function solve(){
  return p;
}

const PromiseData = solve();
console.log(PromiseData);
PromiseData.then(function(res){
  //actual data is here.
  console.log(res);
});


//Await is a keyword that can only be used inside an async function.