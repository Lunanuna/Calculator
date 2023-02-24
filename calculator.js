const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');


buttons.forEach(button => {
    button.addEventListener('click', (e) => {

        const value = e.target.dataset.value;
        console.log(value);

         //to make calculated by -+/*
         if (value === '-' || value === '+' || value === '×' || value === '÷'){
            if (display.innerText.includes('÷')) {
                const splitStuff = display.innerText.split('÷');
                operate('÷', splitStuff[0], splitStuff[1]);
            }    
            if (display.innerText.includes('-')) {
                const splitStuff = display.innerText.split('-');
                operate('-', splitStuff[0], splitStuff[1]);
            }

             if (display.innerText.includes('+')) {
                  const splitStuff = display.innerText.split('+');
                  operate('+', splitStuff[0], splitStuff[1]);
             }          
            
            if (display.innerText.includes('×')) {
                const splitStuff = display.innerText.split('×');
                operate('×', splitStuff[0], splitStuff[1]);
            }  
        }
        
        //to calculated by equals
        if (value === '='){
            if (display.innerText.includes('÷')) {
                const splitStuff = display.innerText.split('÷');
                operate('÷', splitStuff[0], splitStuff[1]);
            }         
        }
        if (value === '='){
            if (display.innerText.includes('-')) {
                const splitStuff = display.innerText.split('-');
                operate('-', splitStuff[0], splitStuff[1]);
            }
            
        }
        if (value === '='){
            if (display.innerText.includes('+')) {
                const splitStuff = display.innerText.split('+');
                operate('+', splitStuff[0], splitStuff[1]);
            }          
        }
        if (value === '='){
            if (display.innerText.includes('×')) {
                const splitStuff = display.innerText.split('×');
                operate('×', splitStuff[0], splitStuff[1]);
            }           
        }

        // not to show the equal and delete on display
        if (value !== '=' && value !== 'delete'){
            display.innerText += value;
        }
       //to delete a singly letter per click 
        if (value === 'delete'){
            if(display.innerText === "Error"){
                display.innerText = '';
            }
            display.innerText = display.innerText.slice(0,-1);
        }
        //to reset display
        if (value === 'clear'){
            display.innerText = '';
        }
        if (display.innerText === 'NaN'){
            display.innerText = 'Error';
        }
        //to prevent from making multiple .+-/
        
        if (display.includes('×')){
            if (value === '×'){
                return display.innerText;
            }
            
        }
        if (display.includes('+')){
            if (value === '+'){
                display.innerText += '';
            }
            
        }
        if (display.includes('-')){
            if (value === '-'){
                display.innerText += '';
            }
            
        }
        if (display.includes('.')){
            if (value === '.'){
                display.innerText += '';
            }
            
        }
        if (display.includes('÷')){
            if (value === '÷'){
                display.innerText += '';
            }
            
        }
              
    })
});


const operate = (operator, value1, value2) => {
    const num1 = Number(value1);
    const num2 = Number(value2);
    if (operator === '÷'){
        display.innerText = num1 / num2 ;
        if ((num1/num2)-Math.floor(num1/num2) !== 0){
            display.innerText = (num1 / num2).toFixed(3) ;
        }
    }

    if (operator === '+'){
        display.innerText = num1 + num2;
     if ((num1+num2)-Math.floor(num1+num2) !== 0){
            display.innerText = (num1 + num2).toFixed(3) ;
        } 
    }

    if (operator === '-'){
        display.innerText = num1 - num2;
     if ((num1-num2)-Math.floor(num1-num2) !== 0){
            display.innerText = (num1 - num2).toFixed(3) ;
        } 
    }

    if (operator === '×'){
        display.innerText = num1 * num2;
     if ((num1*num2)-Math.floor(num1*num2) !== 0){
            display.innerText = (num1 * num2).toFixed(3) ;
        } 
    }

}



