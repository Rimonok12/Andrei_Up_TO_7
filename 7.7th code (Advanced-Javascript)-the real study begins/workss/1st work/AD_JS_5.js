let a =5;
let b =a;
b++;
// console.log(a===b);
// console.log(a,b);


let obj={
a:'a',
b:'b',
c:{
	deep :"Try And Copy Me!" 
	}	
};
// let obj4 = obj3//pass by reference
let clone = Object.assign({},obj);
let clone2={...obj};

var superClone = JSON.parse(JSON.stringify(obj));
obj.c.deep='HAHAHAHA';
clone.a=123;
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);

if(1){
  console.log(2)
  };


// let obj1 = {
//   name : 'Yao',
//   password: '123'
// };
// let obj2=obj1;

// obj2.password='easy';
// console.log(obj1,obj2);

// let c =[1,2,3,4,5];
// let d =[].concat(c) ; 
// d.push(123);
// console.log(c,d);
console.log("-------------------------------------------------------------");

var num = 0;
var obj123 = new String('0');
var str = '0';

console.log("num === num : ", num === num); // true
console.log("obj123 === obj123 : ", obj123 === obj123); // true
console.log("str === str : ",str === str); // true

console.log(num === obj123); // false
console.log(num === str); // false
console.log(obj123 === str); // false
console.log(null === undefined); // false
console.log(obj123 === null); // false
console.log(obj123 === undefined); // false



console.log("-------------------------------------------------------------");

Object.is(-0 === +0);

console.log("-------------------------------------------------------------");


const square = (x) =>(y) => y*x*3;
console.log(square(3)(4));

console.log('Turtle'.padStart(12));
console.log('Turtle'.padEnd(12));


const fun=(
    a,
    s,
    d,
    f
    ) => {
    console.log(a);
}
fun(1,2,3,4);


console.log("-------------------------------------------------------------");
console.log("-------------------------------------------------------------");
console.log("-------------------------------------------------------------");

Object.values
Object.entries
Object.keys

let obj234={
    un:'santa',
    un1:'manta',
    un2:'Kanta',
};



Object.keys(obj234).forEach((key,index)=>{
    console.log(key, obj234[key]);
})

console.log("------------------------------------------");

Object.values(obj234).forEach(value =>{
    console.log(value);
})

console.log("------------------------------------------");


Object.entries(obj234).forEach(value =>{
    console.log(value);
})

console.log("------------------------------------------");


Object.entries(obj234).map(value =>{
    return value[1]+value[0].replace('un', '');
})


 


