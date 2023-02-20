
//create calculate functions 

const add = function(...args){
    let sum = 0
    for (let arg of args){
        sum += arg;
    }
    return sum;
};

const subtract = function (a,b){
    return a-b;
}

const multiply = function (a,b){
    return a*b;
}

const divide = function (a,b){
    return a/b;
}

// create a new function called operate

const operate = function (a,b, operator){
    if (operator == 'add'){
        return add(a,b);
    }else if (operator == 'subtract'){
        return subtract(a,b);
    }else if (operator == 'multiply'){
        return multiply(a,b);
    }else if (operator == 'divide'){
        return divide(a,b);
    }
     
}

console.log(operate(15,5,'divide'));