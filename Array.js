// Site: https://dev.to/mcube25/7-javascript-array-methods-you-should-know-7mf
const clubs = [
    { name: "All-stars", fans: 20000 },
    { name: "Bay", fans: 30000 },
    { name: "C-stars", fans: 25000 },
    { name: "D-pillars", fans: 40000 },
    { name: "Clos", fans: 60000 },
    { name: "Magic", fans: 45000 }
  ]
  
  //filter
  const filterFans = clubs.filter((item) => { return item.fans <= 30000})
  console.log(filterFans)
  // This returns a new array with just the requested objects
  
  //find
  const findClub = clubs.find((item) => { return item.name === "Clos" })
  console.log(findClub)
  // Returns a new array with the single requested object
  
  //mapping
  const mapClub = clubs.map((item) => { return item.name })
  console.log(mapClub)
  // Returns a new array of ["All-stars", "Bay", "C-stars", "D-pillars", "Clos", "Magic"]
  
  //forEach
  const loopClub = clubs.forEach((item) => { console.log(item.name) })
  console.log(loopClub)
  // Alternative to for loop in which they both iterate over each item of array; doesn not "return" but "console.log"
  
  //some
  const someClub = clubs.some((item) => { return item.fans <= 30000})
  console.log(someClub)
  // This checks the requested argument. If any is true, it returns a single boolean response 
  
  //every
  const everyClub = clubs.every((item) => { return item.fans <= 30000})
  console.log(everyClub)
  // Checks if every item of array fits the criteria, return a single boolean response
  
  //reduce
  const totalFans = clubs.reduce((acc, val) => { return val.fans + acc} ,0)
  console.log(totalFans)
  // It reduces the original array by adding up each paramemter after another.
  