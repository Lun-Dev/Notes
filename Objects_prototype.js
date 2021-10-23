/* Constructor function
- Use capitalization when making constructor function
- It is to indicate that it is not a normal function */

function Student(id, name, subjects) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
}

Student.prototype.info = function() {
    return `The student name is  ${this.name}.`
}

// when calling constructor function, use "new"
const student1 = new Student()