function sum(a,b){
    return a+b;
}

function sumMe(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log(sum(4,5));
console.log(sumMe(4)(5)(9));

/*
    Currying is a technique in js which convert function with n argument to n function with onw
    or fewer arguments.
    eg:-f(a,b,c)=====>>f(a)(b)(c)
*/