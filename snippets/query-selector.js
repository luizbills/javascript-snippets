function $ (selector, el = null) {
    if (!el) el = document;
    return el.querySelector(selector);
}

function $$ (selector, el = null, returnArray = true) {
    if (!el) el = document;
    const res = el.querySelectorAll(selector);
    return returnArray ? Array.from(res) : res; 
}
