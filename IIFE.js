let testFunction = (function() {
    let _suffix = "Yes man"

    function _checkSuffix() {
        console.log(`Hello ${_suffix}`)
    }

    return {
        aMethod: function() {
            _checkSuffix();
        }
    }
})();

testFunction.aMethod();

let newFunction = (function(){
    let _privateVariable = "I'm private"
    let publicVariable = "I'm public"

    function _privateMethod() {
        console.log(`Hello ${_privateVariable}`)
    }

    function publicFunction() {
        console.log(`Hello ${publicVariable}`)
    }

    return {
        publicVariable: publicVariable,
        publicFunction: publicFunction
    }
})();

newFunction.publicFunction()