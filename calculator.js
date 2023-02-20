
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

