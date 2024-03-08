const reverseString = function(string) {
    let stringArray = string.split("");
    let reversedStringArray = stringArray.reverse();
    let outputString = reversedStringArray.join("");

    return outputString
};

// Do not edit below this line
module.exports = reverseString;
