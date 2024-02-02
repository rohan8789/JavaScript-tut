function abc(){
    let a=10,b=20;
    function xyz(){
        console.log(a+" "+b);
    }
    
    a=100;
    return xyz;
}

let z=abc();
z.a=30;
z();