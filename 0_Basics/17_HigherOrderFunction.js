/*
    A function which takes another function as an argument or returns a function from it is known as
    HIGHER ORDER FUNCTION. 
*/

function x(){
    console.log("Callback Function");
}
function y(x){
    x();
    console.log("Higher Order Function");
}
y(x);


/*
    Beauty of functional programming: reusability, modularity, passing and returning functions
    Function programming :- 
    breaking down the code into smaller functional units.
*/