let duck = {
    name: 'Bob',
    numLegs: 2,
    sayName: function() {
        console.log("The name of this duck is " + this.name + ".");
        return "The name of this duck is " + this.name + ".";
        }
}

let sample = duck.sayName
sample()
// Lost connection to the duck object (As per below, js dunno where to find "this.name")

/* let sample = function() {
    console.log("The name of this duck is " + this.name + ".")
}
*/

// Output: "The name of this duck is result."

let sample2 = sample.bind(duck)
sample2()
// Bind establish connection again with the object

// Output: "The name of this duck is Bob."

let button = document.getElementById('niceButton')
button.addEventListener(
    'click', 
    duck.sayName.bind(duck)
)

// Output: "The name of this duck is Bob."