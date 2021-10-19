//Site: https://www.youtube.com/watch?v=QNmRfyNg1lw
const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

// some
const ageFilter = people.some((item) => {
	const currentYear = (new Date()).getFullYear(); // Declare a current year variable
if (currentYear - item.year >= 19) { // if 2021 - each item's year is greater than 19)
	return true; // return true
} else {
	return false // otherwise return false
}
})

console.log(ageFilter)


// every
const everyAge = people.every((item) => {
	const currentYear = (new Date()).getFullYear(); // Declare a current year variable
if (currentYear - item.year >= 19) { // if 2021 - each item's year is greater than 19)
    return true; // return true
} else {
    return false // otherwise return false
}
})

console.log(everyAge)

// filter
const isGood = comments.filter((item) => { return item.id === 523423}) // Return object if ID is 523423
console.log(isGood)

