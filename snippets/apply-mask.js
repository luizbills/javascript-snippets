function applyMask(text, mask, force /* = true*/ ) {
    var result = '';
    var textCounter = 0;
    
    // force param default value
    force = (null == force) ? true : force;
    
    // remove all non allphanumerics
    text = (text + '').replace(/[^a-zA-z0-9]/gi, '');

    if (!force) {
        var maskLength = mask.replace(/[^a-zA-z]/gi, '').length;
        if (maskLength !== text.length) return false;
    }

    for (var i = 0; i < mask.length; i++) {
        if ('X' === mask[i]) {
            if (null == text[textCounter]) break;

            result += text[textCounter];
            textCounter++;
        } else {
            result += mask[i] || '';
        }
    }
    return result;
}

// # Usage

// CPF
console.log(applyMask('12232569666', 'XXX.XXX.XXX-XX')); // => 122.325.696-66

// Date
console.log(applyMask('02162018', 'XX/XX/XXXX')); // => 02/16/2018

// Hour
console.log(applyMask('162000', 'XX:XX:XX', true)); // => 16:20:00

// Example with text input as "date input"
var input = document.getElementById('my-input');
input.addEventListener('keydown', function(evt) {
    // ignores backspace key
    if ( evt.keyCode === 8 ) return false;
    
    var value = applyMask(this.value, 'XX/XX/XXXX');

    // you need validate/sanitize the input

    this.value = value;
});
