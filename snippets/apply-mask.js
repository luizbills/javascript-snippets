function applyMask (text, mask, strict) {
    var result = '';
    var textCounter = 0;
    
    // strict param default value = false
    force = ('undefined' === typeof strict) ? false : strict;
    
    // remove all non allphanumerics
    text = (text + '').replace(/[^a-zA-z0-9]/gi, '');

    if (strict) {
        var maskLength = mask.replace(/[^X]/gi, '').length;
        if (maskLength !== text.length) return false;
	}

    for (var i = 0; i < mask.length; i++) {
        if ('X' === mask[i]) {
            if ('undefined' === typeof text[textCounter]) break;
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
console.log(applyMask('162000', 'XX:XX:XX')); // => 16:20:00

// Example with text input as "date input"
var input = document.getElementById('my-input');
input.addEventListener('keyup', function(evt) {
    // ignores backspace key
	var mask = 'XX/XX/XXXX';
	var content = this.value || '';
	
    if ( evt.keyCode === 8 ) {
		return false;
	}
    
    var newValue = applyMask(content, mask);

    // you need validate/sanitize the input

    this.value = newValue;
});
