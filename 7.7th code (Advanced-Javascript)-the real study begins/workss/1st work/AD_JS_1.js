// scope

//root scope(window):

let fun = 4;

function funFunc() {
    let fun = "hellooo";
    console.log(fun)
}

function funFunc2() {
    let fun = "bye";
    console.log(fun);
};

function funFunc3() {
    let fun = "ahhhh";
    console.log(fun);
};
console.log("window", fun);
funFunc();
funFunc2();
funFunc3();
console.log(fun)


//If Else::

function isUserValid(bool) {
    return bool;
}
var answer = "Your account # is  " + (isUserValid(false) ? "1234" : "not available");
console.log(answer);

//Switch::

function mvComnd(direction) {
    let whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a Monster .";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            x
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "Please enter a valid direction.";
    }
    return whatHappens;
}
console.log(mvComnd());