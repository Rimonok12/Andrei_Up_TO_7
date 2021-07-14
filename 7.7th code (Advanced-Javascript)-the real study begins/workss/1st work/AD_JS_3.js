const first = () => {
    const greet = 'Hi';
    
    const second = () => {
        // alert(greet);
        console.log(greet);
    } 
    return second;
}
const newFunc=first();
newFunc();


//---------------------------------------------------------------//
// currying: 

let multiple = (a,b) => a *b ;
console.log(multiple(13,14));


let curriedMultiple = (r)=>(t)=>r*t ;
const multiplyBy5 =curriedMultiple(5);
console.log(curriedMultiple(4)(7));
console.log(multiplyBy5(12));


//Compose::
let compose =(f,g)=>(r)=>f(g(r));
let sum1 = (num)=>num+1;
console.log(compose(sum1,sum1)(6122));


//Avoiding side effects :: => =>
let a =1;function b(){ a=2 };
b();


////////////////////////////////----------- ARRAY ------------//////////
const array = [1,2,3,4,5,6,7,8,9];

const double=[];

const nA=array.forEach((num)=>{
    return double.push(num*2);
})
console.log('For each array',double);

//////// map ,, Filter ,, Reduce  : 

///-------- Map ------------//////

let mapArray = array.map( num=>num*4);
console.log('For map ' , mapArray);

///------Filter -------//////
const filterArr=array.filter(num => num > 5);
console.log('For filter ' , filterArr);

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	// alert(num);
	return num * 2;
}) 
///------Reduce -------//////
const reduceArr = array.reduce((acc,num)=>{
    return acc + num ; 
}, 3 * 3)
console.log('reduce : ',reduceArr); 



