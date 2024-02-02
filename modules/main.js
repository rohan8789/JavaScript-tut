// When importing default exports from a module, you do not need to use curly braces. This is because default exports are unique, so there is no need to specify which export you are importing.


// import {default as rohan} from './library.js'; 
import rohan from './library.js'; //You can assign random name to default function
import {module, user, Test} from './library.js';
import { bridgerfun } from './bridge.js';

console.log(`${module}`);
rohan();
document.body.innerHTML=module;
console.log(user("Rohan Singh"));

let x = new Test("Rohan");
console.log(x);

//bridge concept
console.log(bridgerfun());