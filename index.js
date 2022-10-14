const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let fare;
function createFareMultiplier(int){
    return (fare)=> fare * int;
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfNames, func){
    return func(arrayOfNames);
}