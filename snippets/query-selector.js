function $ (selector, el) {
    if (!el) {el = document;}
    return el.querySelector(selector);
}

function $$ (selector, el, returnArray) {
    returnArray = null == returnArray ? true : returnArray; // default is true
    if (!el) {el = document;}
    return returnArray ? Array.prototype.slice.call(el.querySelectorAll(selector)) : el.querySelectorAll(selector); 
}
