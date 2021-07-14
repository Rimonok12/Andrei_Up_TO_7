const basket=['apple','banana','orange'];
const detailedBasket={ 
    Apples : 4,
    Banana:5,
    Orange :22
}
//1::
for(let i = 0; i <basket.length; i++){
    console.log[basket[i]];
}

//2: What does the last line return?

basket.forEach(item=>{
    console.log("ForEach :",item);
})

//"For OF"-(Es6) Loop:::iteRating---> array ,string:::
for(item of basket){
    console.log("item of : " , item);
}

console.log("==================")

//"FOr in"-(Es6) loop's:::   properties  ::
// Enumerating: ---> Object : : : 
for(item in detailedBasket){
    console.log("item in: ", item);
}
