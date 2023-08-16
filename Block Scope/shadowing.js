var a = 100;
let b = 100;
const c = 70;
{ 
    var a = 10; // this a shadow that previous value of a it also modify the value of previous a 

    let b = 100;
    const c = 1000;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);

console.log(b); // it print the value 100 because it belong from another block


console.log(c); // it also work like let 

// illegal shadowing 
/*
    let a = 20;
    {
        var a = 20;
    }

    // this is illegal shadowing 

    let a = 20;
    function x() {
        var a = 20;
    } 
    // this is legal
    
    // it also happen with const 

*/ 

