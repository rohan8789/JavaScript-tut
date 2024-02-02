/* Interview Question  */

//1
function f(){
    let i=1;
    setTimeout(()=>{
        console.log(i);
    },3000);
    console.log("Nameste JS");
}
f();
/*
    In any normal programming language,
    Peoplw will think SetTimeout will wait for 3 sec and then print nameste js
    But JS is async, it does not wait for function call to return.

    Explanation:
    ()=>{
        console.log(i);
    }
    This function forms a closure with its lexical surroundings
    Hence, where ever the control of program goes, it takes the reference of i with it.
*/

//2
function f2(){
    for(var i=1; i<=5; i++){
        setTimeout(()=>{
            console.log(i);
        },i*1000);
    }
    console.log("Nameste JS2");
}
f2();
/*
    What do you think this code will do???
    You expect to print i,2,3,4,5 after some interval
    But istead This code will print 6 6 6 6 6 
    BUT WHY??????
    here again closure comes to picture.
    closure = function + its lexical env

    1.  when i=1, 
        ()=>{
            console.log(i);
        }
        it makes the copy of this function attaches a timer and remembers the reference of i.
        similarily 5 copies of this func are pointing to the same reference
    
    2.  JS does not wait for setTimeout to finish rather, it quickly executes the loop 0(1).
        when timer expires, var i has already become 6 

    That is why it prints 6
*/

//How to solve this.

/*
    Solution 01:
        Solution for this is to use let variabe. because let has a block scope.
        Whenever loop runs i is a new variable(new copy of i).
        let ---- block scope
        var ---- global scope
    Solution 02:
        To solve this using var only, enclose setTimeout with a new function.
        here also, only closure can save you.
*/
