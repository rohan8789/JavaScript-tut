/*

    Blocks:
    Blocks are compound statements. {}
    Blocks are the structure which is used to combine multiple variable declaration and other expression
    into one group using {}.

    Block Scope:
    Block scope means all variable and functions that we can access inside the block. 
    if a variable is declared inside a block using let/const. its scope ends where block ends.
    let and const are block scoped. but, var has function scope


    Shadowing:
    when a variable of same name is present outside of a block. variable inside the block shadows 
    the variable outside the block.

    Redeclaration vs shadowing:
    you can use let (or const) to create a new variable with the same name as an outer variable 
    within a nested scope.
    shadowing can be done with let ------->>> let

    let -----> var ILLEGAL SHADOWING
    var -----> let is completely fine


    Lexical block<--------- nesting of block

*/

const a=10;
let b=20;
var c=30;
{
    const a=100;
    let b=200;
    var c=300;
    console.log(a+" "+b+" "+c);
}
console.log(a + " " + b + " " + c);