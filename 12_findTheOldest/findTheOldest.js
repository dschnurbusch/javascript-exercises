
const getAge = function(person) {
        return person.yearOfDeath - person.yearOfBirth || new Date().getFullYear() - person.yearOfBirth;
    };

const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest);
        const currentAge = getAge (currentPerson);
        return currentAge > oldestAge ? currentPerson : oldest;
    });



};

// Do not edit below this line
module.exports = findTheOldest;
