const findTheOldest = function(people) {
    const peopleWithAge = people.map(person => {
        let age;
        if (person.yearOfDeath) {
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            const currentYear = new Date().getFullYear();
            age = currentYear - person.yearOfBirth;
        }

        let updatedPerson = person;
        updatedPerson.age = age;
        return updatedPerson
    })

    let oldestPerson = peopleWithAge.reduce((accumulatedPerson, currentPerson) => {
        if (accumulatedPerson.age > currentPerson.age) return accumulatedPerson
        else return currentPerson
    })

    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
