function applyMoneyMask(element, precision = 2, sepDecimals = '.', sepThousands = ',', dataAttr = null) {
  if (!element) return console.error('missing HTML Element');

  const callback = function (evt) {
    const target = evt.target;
    let value = target.value.replace(/[^0-9]/g, '');

    precision = Math.abs(precision)
    value = value.padStart(1 + precision, '0');
    value = Number(value.slice(0, -precision) + '.' + value.slice(-precision))

    target.value = number_format(
      value,
      precision,
      sepDecimals,
      sepThousands,
    );

    if (dataAttr) target.setAttribute(`data-${dataAttr}`, value)
  }

  element.addEventListener('input', callback);
  element.dispatchEvent(new window.Event('input'));

  return () => element.removeEventListener('input', callback);
}

// based on https://stackoverflow.com/a/34141813
function number_format(number, decimals = 2, dec_point = '.', thousands_sep = ',') {
  // Strip all characters but numerical ones.
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}
