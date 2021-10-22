//https://javascript.plainenglish.io/callback-functions-in-javascript-b90684dbae6d
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing

function takeOrder() {
    setTimeout(() => {
       return (Math.random() * 10) <= 5 ? 'Coffee' : 'Tea';
    }, 1000);
}
let order = takeOrder();
console.log('Order is for: ' + order);
// Order is for: undefined