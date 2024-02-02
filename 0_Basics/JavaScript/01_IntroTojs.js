
console.time('Your Code took')
//Power of COnsole
console.log('Hello world');
console.log(34+4);
console.log(34);
console.log(true);
console.log([2,5, 11, 24]);
console.log({Name:'Rohan', marks:34});
console.table({Name:'Rohan', marks:34});
// console.warning('This is a Warning');
// console.clear();
console.assert(566>189, 'Age greater than 189 is not possible');
console.error("This is an error");
console.timeEnd('Your Code took');


//What is scope and scope chaining in js.
/*
    Scope in JS determines the accessibility of variables and functions
    There are three types of scopes in JS:

        Global Scope
        Function Scope
        Block Scope-------> for block if block


        Scope chaining:
        if the javascript engine does not find the variable in block scope, it tries to check for the 
        variable in the outer scope.If the variable does not exist in the outer scope, 
        it tries to find the variable in the global scope.
        else reference error is thrown
*/

