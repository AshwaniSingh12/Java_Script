// console.log(a); it gives error :- can`t access a befor initialization 

let a = 10;

console.log(a);

var b = 100;

// if we declare let a = 20; it gives us syntax error 
// so we cant`t redeclare variable using let 
// using var we can redeclare variable again


let m;

const n;
m = 10;
// we can declare let value in later of the program 
n = 100;

// we can`t initialize later in the program 
// it gives us a syntax error (Missing initializer in const declaration)