// ES6
const range = (start, end) => Array.from({length: end - start + 1}, (_,i) => i + start)

// old js
function range (start, end) {
  return Array.from({
    length: end - start + 1
  }, function (_, i) {
    return i + start;
  });
}
