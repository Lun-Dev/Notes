const submit = document.getElementById("submit")
const libraryArray = [];

class Book {
    constructor(title, author, pages, read) {
        this._title = title;
        this._author = author;
        this._pages = pages;
        this._read = read;
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }

    get read() {
        return this._read;
    }
}

submit.addEventListener('click', function getTarget(e) {
    e.preventDefault()
    const titleInput = document.getElementById('title_input').value;
    const authorInput = document.getElementById('authorinput').value;
    const pagesInput = document.getElementById('pages_input').value;
    const readInput = document.getElementById('read_input').value;
    const book = new Book (titleInput, authorInput, pagesInput, readInput)
    libraryArray.push(book)
}
