class Dog {
    constructor(name) {
        this.name = name
        this.old = false
    }
}

let puppy = new Dog("Toby")

// console.log(puppy.name) // Output: "Toby"
// console.log(puppy.old) // Output: "false"

class Person {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this.name;
    }
}

console.log(Person.name)