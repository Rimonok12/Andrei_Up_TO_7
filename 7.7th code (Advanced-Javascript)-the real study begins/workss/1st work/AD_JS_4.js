//// Video no : 151 //// 

// ----------------------------------------//

//reference Type:
let obj1={value : 15 };
let obj2 = obj1; 
let obj3={value :10};
console.log(obj1, obj2, obj3);

//Context : \
const obj4={
    a: function(){
        console.log(this);
    }
}
obj4.a()

//instantiation : -> multiple copy of obj. 

class Player {
    constructor(name , type){
        console.log('Player', this);
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi i am ${this.name}, I am a ${this.type}`)
    }
}
class Wizard extends Player {
    constructor(name  ,  type){
        super(name, type)
        console.log('Wizard',this)

    }
    play(){
        console.log(`Weeee I'm a ${this.type}`);
    }
}
const wizard1 = new Wizard('Shelly','Healer');
console.log(wizard1.play());
// let w1=wizard1.play();
const wizard2 = new Wizard('John','Dark Magic');
console.log(wizard2.introduce());
// let w2=wizard2.introduce();
// console.log("wizard1 is : " , w1," and wizard2 is : " ,w2 );
