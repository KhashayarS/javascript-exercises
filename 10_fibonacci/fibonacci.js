const fibonacci = function(input) {

    let inputNumber = Number(input);
    
    if (inputNumber < 0) return "OOPS";

    let resultsArray = [0, 1];

    for (let i = 2; i <= inputNumber; i++) {
        let newValue = resultsArray[i-2] + resultsArray[i-1];
        resultsArray.push(newValue);
    }

    let outputValue = resultsArray[inputNumber];

    return outputValue
};

// Do not edit below this line
module.exports = fibonacci;
