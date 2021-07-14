const array=[1,2,3,4,5];
let c=array.flat();
console.log(c);


const array2=[1,[2,3],[4,5]];
let c2=array2.flat();
console.log(c2);


const array3=[1,2,[3,4,[5]]];
let c3=array3.flat();
console.log(c3);

const jsP_array=[['🐫','🐳'],'🐮','🐹',['🐶','🦁'],[[[['🦄']]],'🦓'],['🐐','🐛']];
console.log(jsP_array.flat(54));


let entries = ['Bob','SAlly',,,,,,,,,,,,,,,,,,'Cinda']
console.log(entries.flat());

let jsP_array2=jsP_array.flatMap(creature => creature + '🦄');
console.log('jsP_array2' , jsP_array2);

userEmail = '     ed@gmail.com';
userEmail2= '      jon@gmail.com               ';
console.log(userEmail.trim());
console.log(userEmail2.trim());



userProfile =[['Bobby the magician', 23],['Simon The player ',34],['Cricket',22]];
console.log(Object.fromEntries(userProfile));

console.log(Object.entries(userProfile));

try{
    hi  +  1;
} 
catch(error){
 console.log("The error is : " + error);
}
