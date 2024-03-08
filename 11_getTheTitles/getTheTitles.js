const getTheTitles = function(inputObjectsArray) {
    let books = [];
    for (inputObject of inputObjectsArray) {
        books.push(inputObject.title);
    }

    return books
};

// Do not edit below this line
module.exports = getTheTitles;
