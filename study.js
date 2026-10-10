const hoursPerDay = Number(process.argv[2]);
const daysPerWeek = Number(process.argv[3]);
function calculateLearnOfWeek (hours, days) {
    return hours * days
}

if (isNaN(hoursPerDay) || isNaN(daysPerWeek)) {
    console.log('Invalid input. Please provide valid numbers.');
} else if (hoursPerDay <= 0 || hoursPerDay > 24) {
    console.log('Hours per day must be greater than 0 and no more than 24.')
} else if (daysPerWeek < 1 || daysPerWeek > 7 || !Number.isInteger(daysPerWeek)) {
    console.log('Days per week must be a whole number between 1 and 7.')
} else {
    const totalHours = calculateLearnOfWeek(hoursPerDay, daysPerWeek);
    console.log(totalHours);
}

