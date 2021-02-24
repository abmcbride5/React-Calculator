
export default function findValue(operationArray){
    
    console.log(operationArray);

    const operationHash = {
        '+': add,
        '-': subtract,
        '÷': divide,
        'x': multiply
    };
    
    const operator = operationArray[1];
    const operation = operationHash[operator];
    const ans = operation(operationArray[0], operationArray[2]);
    console.log(operation);

    return ans
    
}

function add(a, b){
    return parseInt(a) + parseInt(b);
}
function subtract(a, b){
    return parseInt(a) - parseInt(b);
}
function divide(a, b){
    return parseInt(a) / parseInt(b);
}
function multiply(a, b){
    return parseInt(a) * parseInt(b);
}