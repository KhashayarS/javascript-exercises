const removeFromArray = function(mainArray, ...removingItems) {
    let outputArray = mainArray;
    for (removingItem of removingItems) {
        outputArray = outputArray.filter(el => el !== removingItem);
    }

    return outputArray
};

// Do not edit below this line
module.exports = removeFromArray;
