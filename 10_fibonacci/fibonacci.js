const fibonacci = function(a) {
    if(a < 0){
        return "OOPS";
    }

    let firstNum = 0;
    let secondNum = 1;

    for(let i = 1; i < a; i++){
        let next = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = next;
    }
    return secondNum;
};

// Do not edit below this line
module.exports = fibonacci;
