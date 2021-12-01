// class Dog {
//     constructor(name) {
//         this.name = name
//         this.old = false
//     }
// }

// let puppy = new Dog("Toby")

// // console.log(puppy.name) // Output: "Toby"
// // console.log(puppy.old) // Output: "false"

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     get name() {
//         return this.name;
//     }
// }

class Book {
    constructor(title, author, pages) {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = false
  }
    read() {
  	    this.read = true
  }
}

class NewBook extends Book {
  constructor(title,author,pages) {
    super(title,author,pages);
  }
}
