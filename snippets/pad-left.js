const padLeft = (value, n, char) => Array(n-String(value).length+1).join(char || '0') + value

// old JS
function padLeft (value, n, char) {
  return Array(n - String(value).length + 1).join(char || '0') + value;
};

// usage
console.log(padLeft(7,3,'0')) // => 007
