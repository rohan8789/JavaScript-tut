/*
    1. This file is used to act as a pool between main.js and library.js.
    2. We solved something in library.js and want to send it to main.js. 
    3. How to do it.
    ---->> use export istead of import 
*/
export {bridgerfun} from './library.js';
