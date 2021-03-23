let raceNumber = Math.floor(Math.random() * 1000);
/*
 Early adults receive a race number at or above 1000.
raceNumber? --> All others receive a number below 1000.
Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
*/
// console.log(raceNumber)

const registeredEarly = true;
const registrationTime = 12
const age = 19;

if (age > 18 && registeredEarly === true) {
  raceNumber += 1000
  raceNumber
} else {
  raceNumber
}


if (age >= 18 && registrationTime <= 9.30) {
  console.log(`You will race at 9.30am and your race number is: ${raceNumber}`)
} else if (age >= 18 && registrationTime <= 11){
  console.log(`You will race at 11.00am and your race number is: ${raceNumber}`)
} else if (age < 18) {
  console.log(`You will race at 12.30pm and your race number is: ${raceNumber}`)
} else {
  console.log("We are not handling any registrations at the moment, please comeback tomorrow for early hours to register at the registation desk")
}
