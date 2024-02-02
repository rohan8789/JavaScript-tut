/*
    we should always return a promise when we create a promise?
    No, Returning a promise is necessary:

    1. When function does an asynchronous operation: 
    If your code takes time to finish, like fetching data, returning a promise allows you to manage its 
    eventual outcome 
    2. promise chaining: 
    When you have a sequence of tasks that depend on each other, returning promises from each step allows 
    you to chain them using then and ensure they execute in the correct order.
    3. Providing a consistent API: If other functions in your code expect to receive promises, returning 
    a promise makes your API consistent and easier to use.


    However, returning a promise can be avoided:
    For synchronous operations: If your function completes immediately and synchronously, there's no need 
    to return a promise.
*/