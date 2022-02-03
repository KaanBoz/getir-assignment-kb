const validations = require("../misc/validations");

test('null date validation', () => {
    expect(validations.validateDate("date", null)).toBe("[date is a required field]");
});

test('correct date validation', () => {
    expect(validations.validateDate("date", "2016-12-01")).toBe("");
});

test('incorrect date validation', () => {
    expect(validations.validateDate("date", "asdfdasf")).toBe("[date is an invalid date string]");
});

test('null number validation', () => {
    expect(validations.validateNumber("number", null)).toBe("[number is a required field]");
});

test('correct number validation', () => {
    expect(validations.validateNumber("number", 12)).toBe("");
});

test('incorrect number validation', () => {
    expect(validations.validateNumber("number", "asdfdasf")).toBe("[number must be an number]");
});