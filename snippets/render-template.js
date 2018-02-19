function renderTemplate(template, data) {
    var result = template;
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            var regex = new RegExp('{{\\s*' + key + '\\s*}}', 'g');
            result = result.replace(regex, data[key]);
        }
    }
    return result;
}

// Usage

var template = 'hello {{ name }}!'
var result = renderTemplate(template, {
    name: 'John'
});
console.log(result); // => hello John!
