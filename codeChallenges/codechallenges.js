var goodDrivingRecord = true;
var age = 24;

// Write a program that evaluates the status of the variables above, and uses logic to print one of three possible messages:
//If the driving record is good and user is over 25 years old, they should get a discount on the car rental
//If the user either has a good record or is over 25 years old, they should pay full price
//If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental

if (goodDrivingRecord === true && age >= 25) {
    console.log("They should get a discount on the car rental")
} else if (goodDrivingRecord === false && age < 25) {
    console.log("They need to have someone else sign for the rental")
} else {
    console.log("They should pay full price")
}

goodDrivingRecord = true;
age = 25;

if (goodDrivingRecord === true && age >= 25) {
    console.log("They should get a discount on the car rental")
} else if (goodDrivingRecord === false && age < 25) {
    console.log("They need to have someone else sign for the rental")
} else {
    console.log("They should pay full price")
}

goodDrivingRecord = false;
age = 20;

if (goodDrivingRecord === true && age >= 25) {
    console.log("They should get a discount on the car rental")
} else if (goodDrivingRecord === false && age < 25) {
    console.log("They need to have someone else sign for the rental")
} else {
    console.log("They should pay full price")
}