/*
- Factories are functions that create objects and return them
- Most cases, you can use factories instead of classes
- No need use this/bind like classes
*/

const dog = () => {
    const sound = 'woof'
    return {
        talk: () => console.log(sound)
    }
}

const sniffles = dog()
sniffles.talk() // Output: "woof"

const person = (name, age) => {
    const sayHello = () => console.log ('Hello');
    return { name, age, sayHello };
}

const jeff = person('Jeff', 26);
console.log(jeff.name)

jeff.sayHello()