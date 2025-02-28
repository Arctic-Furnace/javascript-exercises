const palindromes = function (string) {
    //replace removes
    const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    //split will create an array of the letters in the string, you can't just reverse a string without creating a new function
    return processedString === processedString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
