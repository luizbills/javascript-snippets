const padRight = (value, n, char) => value + Array(n-String(value).length+1).join(char || '0')

// old JS
function padRight (value, n, char) {
  return value + Array(n - String(value).length + 1).join(char || '0');
};
