# Mister Validator

A simple validation library for common data types. This library provides easy-to-use functions to validate emails, URLs, numbers, integers, non-empty strings, and dates.

## Installation

You can install the `mister-validator` library using npm:

```bash
npm install mister-validator

```
## Usage
First, require the library in your project:
```bash
const {
    isEmail,
    isURL,
    isNumber,
    isInteger,
    isNonEmptyString,
    isDate,
} = require('mister-validator');

```
Then, use the validation functions as needed:

Functions

isEmail(value)

Validates if a value is a valid email address.

Parameters:

value (string): The value to be validated.
Returns:

 boolean: true if the value is a valid email, false otherwise.
Example:

```bash
console.log(isEmail('test@example.com')); // true
console.log(isEmail('invalid-email')); // false
```
isURL(value)
Validates if a value is a valid URL.

Parameters:

value (string): The value to be validated.
Returns:

boolean: true if the value is a valid URL, false otherwise.
Example:

```bash
console.log(isURL('https://www.example.com')); // true
console.log(isURL('invalid-url')); // false

```
isNumber(value)
Validates if a value is a valid number.

Parameters:

value (string): The value to be validated.
Returns:

boolean: true if the value is a valid number, false otherwise.
Example:

```bash
console.log(isNumber('123')); // true
console.log(isNumber('abc')); // false

```
isInteger(value)
Validates if a value is a valid integer.

Parameters:

value (number): The value to be validated.
Returns:

boolean: true if the value is a valid integer, false otherwise.
Example:

```bash
console.log(isInteger(123)); // true
console.log(isInteger(123.45)); // false

```
isNonEmptyString(value)
Validates if a value is a non-empty string.

Parameters:

value (string): The value to be validated.
Returns:

boolean: true if the value is a non-empty string, false otherwise.
Example:

```bash
console.log(isNonEmptyString('hello')); // true
console.log(isNonEmptyString('  ')); // false

```
isDate(value)
Validates if a value is a valid date.

Parameters:

value (string): The value to be validated.
Returns:

boolean: true if the value is a valid date, false otherwise.
Example:

```bash
console.log(isDate('2024-07-26')); // true
console.log(isDate('invalid-date')); // false
```
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.


Author- nitinraina775@gmail.com

