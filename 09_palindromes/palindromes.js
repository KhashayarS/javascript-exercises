const reverseString = function(string) {
    let stringArray = string.split("");
    let reversedStringArray = stringArray.reverse();
    let outputString = reversedStringArray.join("");

    return outputString
};


const palindromes = function (string) {
    let punctuation = /[\.,?!\s]/g;
    let lowerString = string.toLowerCase();
    let cleansedString = lowerString.replace(punctuation, "");
    let cleansedStringReverse = reverseString(cleansedString);

    let finalAssessment = cleansedString === cleansedStringReverse;
    return finalAssessment
};

// Do not edit below this line
module.exports = palindromes;
