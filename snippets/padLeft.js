const padLeft = (value, n, char) => Array(n-String(value).length+1).join(char || '0') + value

// old JS
var padLeft = function padLeft (value, n, char) {
  return Array(n - String(value).length + 1).join(char || '0') + value;
};
