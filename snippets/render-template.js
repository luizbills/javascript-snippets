function renderTemplate(template, data) {
    let brackets = [ '{{', '}}' ];
    let result = template;
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const regex = new RegExp(brackets[0] + '\\s*' + key + '\\s*' + brackets[1], 'g');
            result = result.replace(regex, data[key]);
        }
    }
    return result;
}

// Note:
// a more robust and yet lightweight template engine: https://github.com/jasonmoo/t.js

// Usage
var template = 'hello {{ name }}!'
var result = renderTemplate(template, {
    name: 'John'
});
console.log(result); // => hello John!
