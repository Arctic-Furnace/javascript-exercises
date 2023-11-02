const removeFromArray = function() {
    //let arrayItems = arguments[0];
    for(let j = 1; j < arguments.length + 1; j++)
    {
        for (let i = 0; i < arguments[0].length; i++ )
        {
            if(arguments[0][i] === arguments[j])
            {
                arguments[0].splice(i,1);
            }
        }
    }
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
