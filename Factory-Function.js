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