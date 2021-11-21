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