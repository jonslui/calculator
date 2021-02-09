let lastNum = 0;
let operator = 0;
let counter = 0;
let currentNum = "0";
let tmpoperator = 0;
let tmp = 0;
keyPressed = {};



// Display
const Screen = document.querySelector('#Screen');
function writeScreen(n){
    // n=parseInt(n);


    //this 'fullwide' string affects addition
    // n = n.toLocaleString('fullwide', {maximumFractionDigits:2});
   
    Screen.textContent = parseFloat(n);
};


// Monitor Input
keyPressed = {};
document.addEventListener('keydown', function(e){
    keyPressed[e.code] = true;
    
    if(keyPressed.ShiftRight == true && keyPressed.Equal == true){
        add();
        keyPressed = {};
        // return;
    }
    else if(keyPressed.ShiftLeft == true && keyPressed.Equal == true){
        add();
        keyPressed = {};
        // return;
    }
    else if(keyPressed.ShiftRight == true && keyPressed.Digit8 == true){
        multiply();
        keyPressed = {};
        return;
    }
    else if(keyPressed.ShiftRight == true && keyPressed.Minus == true){
        opposite();
        keyPressed = {};
        return;
    } 
    else if(e.keyCode>=48 && e.keyCode <=57){
        currentNum += (e.keyCode%48);
        writeScreen(currentNum);
        keyPressed = {};
    }
    else if(e.keyCode == 191){
        divide();
        keyPressed = {};
    }
    else if(e.keyCode == 13){
        equals();
        keyPressed = {};
    }
    else if(e.keyCode == 27 || e.keyCode == 67){
        clear();
        keyPressed = {};
    }
    else if(e.keyCode == 189){
        subtract();
        keyPressed = {};
    }
    else if(e.keyCode == 8){
        backspace();
        keyPressed = {};
    }
    else if(e.keyCode == 190){
        decimal();
        keyPressed = {};
    }
});



const Zero = document.querySelector('#Zero');
Zero.addEventListener('click', function(){
    currentNum+=0;
    writeScreen(currentNum);
});

const One = document.querySelector('#One');
One.addEventListener('click', function(){
    currentNum+=1;
    writeScreen(currentNum);
});

const Two = document.querySelector('#Two');
Two.addEventListener('click', function(){
    currentNum+=2;
    writeScreen(currentNum);
});

const Three = document.querySelector('#Three');
Three.addEventListener('click', function(){
    currentNum+=3;
    writeScreen(currentNum);
});

const Four = document.querySelector('#Four');
Four.addEventListener('click', function(){
    currentNum+=4;
    writeScreen(currentNum);
});

const Five = document.querySelector('#Five');
Five.addEventListener('click', function(){
    currentNum+=5;
    writeScreen(currentNum);
})

const Six = document.querySelector('#Six');
Six.addEventListener('click', function(){
    currentNum+=6;
    writeScreen(currentNum);
})

const Seven = document.querySelector('#Seven');
Seven.addEventListener('click', function(){
    currentNum += 7;
    writeScreen(currentNum);
});

const Eight = document.querySelector('#Eight');
Eight.addEventListener('click', function(){
    currentNum += 8;
    writeScreen(currentNum);
});

const Nine = document.querySelector('#Nine');
Nine.addEventListener('click', function(){
    currentNum += 9;
    writeScreen(currentNum);
});



const Backspace = document.querySelector('#Backspace');
Backspace.addEventListener('click', backspace);
function backspace(){
    currentNum = currentNum.slice(0, -1);
    if(currentNum.length < 1){
        currentNum = "0";
    }
    writeScreen(currentNum);
};



const Decimal = document.querySelector('#Decimal');
Decimal.addEventListener('click', decimal);
function decimal(){
    currentNum = currentNum + ".";
    writeScreen(currentNum);
};



const Opposite = document.querySelector('#Opposite');
Opposite.addEventListener('click', opposite);
function opposite(){
    currentNum *= -1;
    writeScreen(currentNum);
};



const Clear = document.querySelector('#Clear');
Clear.addEventListener('click',clear);
function clear(){
    currentNum = "0";
    lastNum = "0";
    counter = 0;
    writeScreen(currentNum);
};



const Add = document.querySelector('#Add');
Add.addEventListener('click', add);
function add(){
    if(counter == 1 && operator != 1){
        operate();

        writeScreen(lastNum);
        currentNum = "0";
        operator = 1;


        return;
    }
    if(counter == 1 && operator == 1){
        lastNum = parseFloat(lastNum) + parseFloat(currentNum);
        currentNum = "0";
        writeScreen(lastNum);

        return;
    }

    lastNum = currentNum;
    currentNum = "0";
    operator = 1;
    counter = 1;
};



const Subtract = document.querySelector('#Subtract');
Subtract.addEventListener('click', subtract);
function subtract(){
    if(counter == 1 && operator != 2){
        operate();

        writeScreen(lastNum);
        currentNum = "0";
        operator = 2;


        return;
    }
    if(counter == 1 && operator == 2){
        operate();

        currentNum = "0";
        writeScreen(lastNum);

        return;
    }
    lastNum = currentNum;
    currentNum = "0";
    operator = 2;
    counter = 1;
};



const Divide = document.querySelector('#Divide');
Divide.addEventListener('click', divide);
function divide(){
    if(tmpoperator != 0){
        xx();
    }
    if(counter == 1 && operator != 3){
        tmpoperator = 2;
        tmp = currentNum;
        currentNum = "0";
        writeScreen(lastNum);
        return;
   }
    if(counter == 1 && operator == 3){
        operate();
        writeScreen(lastNum);
        currentNum = "0";

        return;
    }

    lastNum = currentNum;
    currentNum = "0";
    operator = 3;
    counter = 1;
};



const Multiply = document.querySelector('#Multiply');
Multiply.addEventListener('click', multiply);
function multiply(){
    if(tmpoperator != 0){
        xx();
    }
    if(counter == 1 && operator != 4){
         tmpoperator = 1;
         tmp = currentNum;
         currentNum = "0";
         writeScreen(lastNum);
         return;
    };

    if(counter == 1 && operator == 4){
        operate();
        writeScreen(lastNum);
        currentNum = "0";

        return;
    };

    lastNum = currentNum;
    currentNum = "0";
    operator = 4;
    counter = 1;

};



const Equals = document.querySelector('#Equals');
Equals.addEventListener('click', equals);
function equals(){
    operate();
    
    writeScreen(lastNum);
    operator = 0;
};



// seperate them ?
function xx(){
    if(tmpoperator == 1){
        currentNum = parseFloat(tmp) * parseFloat(currentNum);
        tmpoperator = 0;
        tmp = 0;
    }
    else if(tmpoperator == 2){
        currentNum = parseFloat(tmp) / parseFloat(currentNum);
        alert("a");
        tmpoperator = 0;
        tmp = 0;
    }
};



function operate(){
    // if previous operator was multiplication or division 
    if(tmpoperator == 1){
        currentNum = parseFloat(tmp) * parseFloat(currentNum);
        tmpoperator = 0;
        tmp = 0;
    }
    else if(tmpoperator == 2){
        currentNum = parseFloat(tmp) / parseFloat(currentNum);
        tmpoperator = 0;
        tmp = 0;
    }

    if(operator == 1){
        lastNum = parseFloat(lastNum) + parseFloat(currentNum);
    }
    else if(operator == 2){
        lastNum = parseFloat(lastNum) - parseFloat(currentNum);
    }
    else if(operator == 3){
        lastNum = parseFloat(lastNum) / parseFloat(currentNum);
    }
    else if(operator == 4){
        lastNum = parseFloat(lastNum) * parseFloat(currentNum);
    }

};