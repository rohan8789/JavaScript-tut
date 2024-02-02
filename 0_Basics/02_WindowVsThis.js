/*
    When you run an empty js file. js engine still creates a global execution context and set up memory
    space. js also creates window object and this keyowrd.

    Window is a global object created along with global execution context.
    At global level, this keyword points to window object.
    Hence,
        this ===window      at global level

    Any variable/func created anywhere other than inside a function, these get attached to window object.
    we can access using window.variable.func

*/

