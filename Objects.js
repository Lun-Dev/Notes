const playerOne = {
    firstName: "Ryan",
    lastName: "Henderson",
    age: 50,
    fullInfo: function() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old.`
    }
}

console.log(playerOne.fullInfo())