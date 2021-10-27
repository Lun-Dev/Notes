// https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/objects-and-object-constructors

/* Write a constructor for making “Book” objects. 
We will revisit this in the project at the end of this lesson. 
Your book objects should have the book’s title, author, the number of pages, 
and whether or not you have read the book. */

function books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read} yet`
    }
}

const hobbit = new books("The Hobbit", "J.K.", 569, "not read");
console.log(hobbit.info())

// More example
function talk() {
	console.log(this.sound)
}

talk()
/* Output: undefined because "this" is now referring to the global object
*/

// Fixed
function talk() {
	console.log(this.sound) // what is "this" referring to? Needs to know
}

const doggie = {
    sound: "woof woof" // this object has a "sound" property
}

const dogSound = talk.bind(doggie) // now talk can refer to doggie for "sound"
dogSound()