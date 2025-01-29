const now = new Date(); // Current date and time
const twoMonthsBefore = new Date(now); // Clone the current date
twoMonthsBefore.setMonth(now.getMonth() - 2); // Subtract 2 months
console.log(twoMonthsBefore); // Output: Date two months before the current date

// get the datestring of the date two months before the current date
let twoMonthsBeforeString = twoMonthsBefore.toString()
console.log(twoMonthsBeforeString)
