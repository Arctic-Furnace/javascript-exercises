const repeatString = function(string, num) {
    if( num >= 0 )
    {
        let multipleString = '';
        for(let i=0; i<num;i++)
        {
            multipleString += string;
        }
        return multipleString;
    }
    else
    {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
