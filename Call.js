function action() {
    return this.name.toUpperCase();
}

const me = {
    name: "Jackson"
};

console.log(action.call(me))