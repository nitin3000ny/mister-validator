// index.js

// Validate if a value is an email
function isEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
}

// Validate if a value is a URL
function isURL(value) {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(value);
}

// Validate if a value is a number
function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

// Validate if a value is an integer
function isInteger(value) {
    return Number.isInteger(value);
}

// Validate if a value is a non-empty string
function isNonEmptyString(value) {
    return typeof value === 'string' && value.trim().length > 0;
}

// Validate if a value is a date
function isDate(value) {
    return !isNaN(Date.parse(value));
}

module.exports = {
    isEmail,
    isURL,
    isNumber,
    isInteger,
    isNonEmptyString,
    isDate,
};
