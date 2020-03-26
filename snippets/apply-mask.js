function applyMask (text, mask) {
	let result = '';

	// remove all non allphanumerics
	const _text = (text + '').replace(/[^a-zA-z0-9]/gi, '');

	for (let i = 0, j = 0, len = mask.length; i < len; i++) {
	    if (!_text[j]) break;

		if ('X' === mask[i]) {
			result += _text[j]
			j++
		} else {
			result += mask[i] || '';
			j = j > 0 ? j-- : 0;
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

input.addEventListener('input', function(evt) {  
  var mask = 'XX/XX/XXXX';
  var content = this.value || '';
  var newValue = applyMask(content, mask);

  // you need validate/sanitize the input

  this.value = newValue;
  this.maxLength = mask.length;
});
