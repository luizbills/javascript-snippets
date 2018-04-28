function $ (selector, el) {
    if (!el) {
        el = document;
    }
    return el.querySelector(selector);
}

function $$ (selector, el, returnArray) {
    returnArray = 'undefined' === typeof returnArray ? true : returnArray; // default is true
    if (!el) {
        el = document;
    }
    var res = el.querySelectorAll(selector);
    return returnArray ? Array.prototype.slice.call(res) : res; 
}
