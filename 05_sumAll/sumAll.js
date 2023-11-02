const sumAll = function() {

    if (
        typeof arguments[0] != "number" 
        || typeof arguments[1] != "number" 
        || arguments[0] < 0 
        || arguments[1] < 0)
    {
        return "ERROR";
    }


    let total = 0;
    let smallNumber = 0;
    let largeNumber = 0;

    if(arguments[0] < arguments[1])
    {
        smallNumber = arguments[0];
        largeNumber = arguments[1];
    }
    else
    {
        smallNumber = arguments[1];
        largeNumber = arguments[0];
    }

    for (let i = smallNumber; i <= largeNumber; i++)
    {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
