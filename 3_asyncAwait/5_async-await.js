/*
    What do you think will the output of below program?
        will program wait for 25 sec in total, 10 for first resolve, 15 for second resolve.
        will program wait for 15 sec in total, 10 for first+second, 5 for left seoond...


    WAIT, can JavaScript even wait ???
    confused right !!!. Remember, Time, Tide and JavaScript waits for none.
    Read Explanation below.
*/

let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise is resolved successfully");
  }, 10000);
});

let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise is resolved successfully");
  }, 15000);
});

async function getData02() {
  console.log("hello world");
  const res1 = await p1;
  console.log(res1);
  console.log("nameste js-1");
  const res2 = await p2;
  console.log(res2);
  console.log("nameste js-2");
}
getData02();

/*
    1.  Program executed, GEC created.
    2.  getData02() is moved to call stack.
    3.  when getData02() is called & moved to stack, it sees that there are 2 promises which needs to be 
        resolved.
    4.  It register both promises.
    5.  line by line execution starts.
    6.  At line 26, It sees await there. will it wait there.
        No, function will be suspended and popped out of call stack. It will not block the main thread.
    7.  After 10000ms, when promise is resolved. this function will again pushed to callstack and
        start executing from where it actually left.
    8.  At line 29, it will check if a promise p2 is resolve or not. p2 is not yet resolved because its
        been 10 sec only. p2 will resolved after 15 sec. hence, it will again get suspended and poped
        from stack.
        
        

    JavaScript is not multi-threaded but event based, promises based.
*/