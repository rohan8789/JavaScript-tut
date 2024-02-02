/*
1.  Are let and const declaration hoisted? -->explain about temproal dead zone to interviewer
        Yes, BUT let and const are hoisted very differently than var declaration. 
        They are in temporal dead zone for the time being.
        When a variable is declared using var keyword but it has global scope
        when a variable is declared using let or const keyword they are stored in different memory space
        than global(block scope) and you can not access these memory spaces before you put in some value 
        in them. 
------> What is Temporal dead Zone
        Temporal dead zone is the time since when a let or const variable is hoisted till
        the time when it is assigned some value.
        Hence, whenever you try to access the value in temporal dead zone, it gives Reference error.

        
        
        
        Let                                                         Var
        a. Introduced with es6.                                     a. from beginning of js
        b. Block scope                                              b. function scope
        c. can not be redeclared but reassigned.                    c. can be redeclared and reassigned.
        d. Hoisted but, accessing them before                       d. Hoisted
        declaration result in reference err.
        
        
        
        
        
        3. syntax vs reference vs type error
        a. Reference error: when you tries to find out/reference a variable that has not been declared
        b. Syntax error: invalid syntax, does not even compile
    c. Type error: it is about assigning value to wrong type of var
    
    example for c. eg:- const b=100;
                        b=1;  //reassignment gives type error
*/

