let testFunction = (function() {
    return {
        aMethod: function() {
            console.log("hello")
        }
    }
})();

testFunction.aMethod();