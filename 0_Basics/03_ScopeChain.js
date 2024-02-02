/*
    Scope determines the accessibility of variable and functions in a program.
    There are three types of scopes in JS:
        Global Scope
        Local or Function Scope
        Block Scope

    
    Lexical Env:- local memory + reference to lexical environment of parent 
    created when any component is created
    function a(){
        function c(){
            c's lexical parent is a. 
            In memory component of execution context. there is a reference to lexical parent of 
            any function. If function is already in global context then, reference there is set NULL.
        }
    }

    
    Scope chain: done using lexical env.
    Scope chain is the chain of local memory with its parent reference.
    When js engine find a variable and it is not present in local memory. 
    it goes next level of the scope chain. when it does not find it in global environment,
    it throws reference error.

*/