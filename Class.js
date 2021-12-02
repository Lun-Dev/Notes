class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
  
    toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating(){
      this._ratings.reduce((a, b) => a + b ,0) / this.ratings.length;
    }
  
    addRating(mark) {
      this._ratings.push(mark)
    }
  }
  
  class Book extends Media {
      constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

      get author() {
        return this._author;
      }

      get pages() {
        return this._pages;
      }
  }

let book1 = new Book("Mario", "Good Book", 30)
book1.addRating(10)
console.log(book1.ratings)
console.log(book1.title)
console.log(book1.author)
console.log(book1.pages)

// class Dog {
//     constructor(name) {
//         this.name = name
// //         this.old = false
// //     }
// // }

// // let puppy = new Dog("Toby")

// // // console.log(puppy.name) // Output: "Toby"
// // // console.log(puppy.old) // Output: "false"

// // class Person {
// //     constructor(name) {
// //         this.name = name;
// //     }

// //     get name() {
// //         return this.name;
// //     }
// // }

// class Book {
// 	constructor(title, author, pages) {
//   	this.title = title,
//     this.author = author,
//     this.pages = pages,
//     this.read = false
//   }
//   read() {
//   	this.read = true
//   }
// }

// class NewBook extends Book {
// 	constructor(title, author, pages) {
//   	super(title, author, pages)
//     this.read = true
//   }
// }

// const book1 =  new Book("Harry Potter", "JK ROW", 323)
// console.log(book1.title)