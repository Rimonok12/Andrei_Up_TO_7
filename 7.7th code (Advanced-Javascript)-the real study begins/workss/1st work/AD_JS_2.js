//let + const :

const a=function(asd){
    console.log(" Awesome");
}
console.log(a());

const obj ={
    p:'bobby',
    ex:100,
    wL:false
}
const cs={p, ex }=obj;
console.log(cs);


//object variable::

const a_name = "Rimon";
const b_name= true;
const c_name={};
const obj1 = {
    // [a_name]: "deb nath",
    // [2+3]: "sum is 5"
    a_name , b_name , c_name
}

////template string :

let name1="Rimon "; 
let greeting="";
let age=34;
let pet  = "Horse";
const str= "Hello " + name1 + " you seem to be doing " + greeting + "!";

const greetingBest = `Hello ${name1} you seem to be ${age-12} and have a nice ${pet}`;
console.log(greetingBest);

function greet(name2='shamil',age2 =34 ,pet2="cat"){
    return `Hello ${name2} you seem to be ${age2-12} and have a nice ${pet2}`;
}
console.log(greet());

///symbol 

let sm1=Symbol();
let sm2=Symbol('Foo');
let sm3=Symbol('Foo1');
console.log(sm2===sm3);

///Arrow funct:: 

function add1(zx,zz){
    return zx + zz;
}
// console.log();


const add = (zx,zz) =>zx + zz;
console.log(add(3,4),add1(32,4));