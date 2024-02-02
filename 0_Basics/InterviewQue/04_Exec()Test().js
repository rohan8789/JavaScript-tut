/*
    works over Regular expression but not on string.
    exec() is a method used search a pattern in a string and return the pattern string directly
    if not found, returns empty string.
    
    Test() is a method used to search a pattern in a string and return boolean value.
*/

var s="RohanSingh";
var pat="ansi";
const ans=s.test(pat);
console.log(ans);