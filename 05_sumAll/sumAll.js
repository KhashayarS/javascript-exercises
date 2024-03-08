const sumAll = function(...inputRange) {

    for (item of inputRange) {

        if (item < 0 || typeof item !== 'number') {
            return "ERROR"
        }

    }

    let sum = 0;
    let lowerBound = Math.min(...inputRange);
    let upperBound = Math.max(...inputRange);


    for (let num = lowerBound; num <= upperBound; num++) {
        sum += num;
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
