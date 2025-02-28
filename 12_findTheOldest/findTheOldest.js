const findTheOldest = function(people) {
    return people.reduce(function(oldest, currentPerson) {
        const lastPerson = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const nextPerson = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return (nextPerson < lastPerson) ? oldest : currentPerson;
    } );
};

const getAge = function(birthYear, deathYear){
    if(!deathYear){
        deathYear = new Date().getFullYear();
    }
    return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
