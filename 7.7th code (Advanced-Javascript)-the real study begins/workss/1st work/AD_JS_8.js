// ES - 2020 !


// BogINt::::::::


//OPTIONAL chaining Operator:

let ri_pokemon = {
    pikachu: {
        species:'Mouse Pokemon',
        height:0.4,
        weight:6,
        power: 'Lightning'
    }
}

let weight=ri_pokemon.pikachu.weight
console.log('Weight : ', weight)



let ri2_pokemon = {
    raichu: {
        species:'Mouse Pokemon',
        height:0.8,
        weight:30 ,
        power : 'Thunder'
    }
}

let weight3=ri2_pokemon?.pikachu?.weight
console.log(weight3)


let weight4=ri2_pokemon?.raichu?.weight
console.log('weight4:' + weight4)


///Nullis Coaleshing Operator :

let power1=ri2_pokemon?.pikachu?.power?? 'no Power.'
console.log('Power is : ',power1)


let power2=ri2_pokemon?.raichu?.power|| 'no Power.'
console.log('Power is : ',power2)

console.log('')

// Exercise 4: What do these each output?
// let op=function xyz(){
// console.log(false ?? 'hellooo') //false
// console.log(null ?? 'hellooo') //'hellooo'
// console.log(true || 'hellooo') //'hellooo'
// console.log((false || null) ?? 'hellooo') // 'hellooo'
// console.log(null ?? (false || 'hellooo')) // 'hellooo'
// }



const flattened = [[0,1],[2,3],[4,5]].reduce(
    (accumulator,array) => {
    console.log('Array : ' ,array);
    console.log('accumulator : ', accumulator);
    return accumulator.concat(array) 
},[]);


// const flattened2 = [[0,1],[2,3],[4,5]].reduce(
//     (accumulator2,array2) => {
//     debugger;
//     return accumulator2.concat(array2); 
//     // or use this line 
//     //     return accumulator2.concat(0,1); 

// },[]);

//CALL STACKED:::


setTimeout(()=>{
    console.log('Set time out  1 : ','2');
},2000)
console.log('Set time out 2 : ','4');



//WEB api function
//CALlBACK QUEUE
//Event loop