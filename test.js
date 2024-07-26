// test.js
const {
    isEmail,
    isURL,
    isNumber,
    isInteger,
    isNonEmptyString,
    isDate,
} = require('./index');

console.log('Testing isEmail:');
console.log(isEmail('test@example.com')); // true
console.log(isEmail('invalid-email')); // false

console.log('Testing isURL:');
console.log(isURL('https://www.example.com')); // true
console.log(isURL('invalid-url')); // false

console.log('Testing isNumber:');
console.log(isNumber('123')); // true
console.log(isNumber('abc')); // false

console.log('Testing isInteger:');
console.log(isInteger(123)); // true
console.log(isInteger(123.45)); // false

console.log('Testing isNonEmptyString:');
console.log(isNonEmptyString('hello')); // true
console.log(isNonEmptyString('  ')); // false

console.log('Testing isDate:');
console.log(isDate('2024-07-26')); // true
console.log(isDate('invalid-date')); // false
