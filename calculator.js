const Screen = document.querySelector('#Screen');

const Clear = document.querySelector('#Clear');
// tmp tmp

const Seven = document.querySelector('#Seven');
Seven.addEventListener('click', writeSeven);
function writeSeven(e){
    alert("a");
};

const Eight = document.querySelector('#Eight');
Eight.addEventListener('click', writeEight);
function writeEight(e){
    alert("a");
};

const Nine = document.querySelector('#Nine');
const Four = document.querySelector('#Four');
const Five = document.querySelector('#Five');
const Six = document.querySelector('#Six');
const One = document.querySelector('#One');
const Two = document.querySelector('#Two');
const Three = document.querySelector('#Three');
const Zero = document.querySelector('#Zero');
const Decimal = document.querySelector('#Decimal');


const Add = document.querySelector('#Add');
const Divide = document.querySelector('#Divide');
const Subtract = document.querySelector('#Subtract');
const Equals = document.querySelector('#Equals');



// this way or just a function for each number with listeners for each?
window.addEventListener('keydown', keyDown);
function keyDown(e){
    if(e.keyCode == 55){
        writeSeven();
    }
    if(e.keyCode == 56){
        writeEight();
    }

}





function add(a, b){
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a / b;
};



function operate(o,a,b){
    if(o == "+"){
       return add(a,b);
    }
    else if(o == "-"){
        return subtract(a,b);
    }
    else if(o == "*"){
        return multiply(a,b);
    }
    else if(o == "/"){
        return multiply(a,b);
    }
};

