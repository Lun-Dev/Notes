const playerOne = {
    firstName: "Ryan",
    lastName: "Henderson",
    age: 50,
    fullInfo: function() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old.`
    }
}

console.log(playerOne.fullInfo())

// Call another object
const person1 = {
	fullName: function() {
  	return this.firstName + " " + this.lastName;
  }
}

const person2 = {
	firstName: "Jason",
  lastName: "King"
}

console.log(person1.fullName.call(person2)) //using person1 as a template, fill person2's info into person1

// New operator (Like a template)
function guy(firstName, lastName, age) {
    this.firstName = firstName; //From expression
    this.lastName = lastName; //From expression
    this.age = age; //From expression
    this.makeNoise = function() { // Can make functions as well
    	return `Yelling ${this.age}`
    }
}

const dudeOne = new guy("Eli", "Manning", 43)
console.log(dudeOne.firstName)
console.log(dudeOne.makeNoise())

const dudeTwo = new guy("Janet", "Dickinson", 22)
console.log(dudeTwo.lastName)

// New object from scratch
const car = new Object();
car.brand = "Lambo";
car.model = "Aventador";
car.year = 2022;

console.log(car.brand)