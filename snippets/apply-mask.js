function applyMask(text, mask, strict = false) {
  let result = '';
  let textCounter = 0;

  // remove all non allphanumerics
  text = (text + '').replace(/[^a-zA-z0-9]/gi, '');

  if (strict) {
    var maskLength = mask.replace(/[^\X]/gi, '').length;
    if (maskLength !== text.length) return false;
  }

  for (const char of mask) {
    if ('X' === char) {
      if ('undefined' === typeof text[textCounter]) break;
      result += text[textCounter];
      textCounter++;
    } else {
      result += char || '';
    }
  }
  return result;
}

// # Usage

// CPF
console.log(applyMask(12345678900, 'XXX.XXX.XXX-XX')); // => 123.456.789-00

// Date
console.log(applyMask('02162018', 'XX/XX/XXXX')); // => 02/16/2018

// Hour
console.log(applyMask(162000, 'XX:XX:XX')); // => 16:20:00

// Price
console.log(applyMask(29, 'R$ XX,00')); // => R$ 29,00

// Example with text input as "date input"
var input = document.getElementById('my-input');

input.addEventListener('keyup', function(evt) {
  // ignores backspace key
  if (evt.keyCode === 8) {
    return false;
  }
  
  var mask = 'XX/XX/XXXX';
  var content = this.value || '';
  var newValue = applyMask(content, mask);

  // you need validate/sanitize the input

  this.value = newValue;
  this.maxLength = mask.length;
});
