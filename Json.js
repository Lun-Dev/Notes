myLibrary = [];
myLibrary.push({title: 'Harry Potter', author: "Rowling", pages: 50},{title: 'Scary Botter', author: "Bowling", pages: 90})

localStorage.setItem("myNewLibrary", JSON.stringify(myLibrary))
console.log(JSON.parse(localStorage.getItem("myNewLibrary")))
/* [{
  author: "Rowling",
  pages: 50,
  title: "Harry Potter"
}, {
  author: "Bowling",
  pages: 90,
  title: "Scary Botter"
}] */
console.log(localStorage.getItem("myNewLibrary")) // "[{\&quot;title\&quot;:\&quot;Harry Potter\&quot;,\&quot;author\&quot;:\&quot;Rowling\&quot;,\&quot;pages\&quot;:50},{\&quot;title\&quot;:\&quot;Scary Botter\&quot;,\&quot;author\&quot;:\&quot;Bowling\&quot;,\&quot;pages\&quot;:90}]"