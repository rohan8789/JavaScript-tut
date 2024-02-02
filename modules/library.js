//Default fun has no name
export default function(){
    console.log("Hiiiiiii");
}

export let module="Communication among files";

export function user(name){
    return `Hello ${name}, Have a nice day`;
}

export class Test{
    constructor(name){
        console.log(`Your constructor called ${name} as you created an object`);
    }
}


//Bridging concept
export function bridgerfun(){
    return "I am Sending data to main via bridge file";
}