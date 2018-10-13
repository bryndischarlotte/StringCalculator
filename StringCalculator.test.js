// StringCalculator.test.js

const add = require("./StringCalculator");
// Empty test
it("Should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});
// Single digit test
it("Should return a number when only one number is in the string", () => {
	expect(add("1")).toBe(1);
});
// Two digit test
it("Should return the sum of two numbers when two numebrs are in the string", () => {
	expect(add("1,2")).toBe(3);
});
// Multiple number test
it("Should return the sum of multiple numbers", () => {
	expect(add("1,2,3")).toBe(6);
});
// Two delimeters allowed 
it("Should return sum of multiple numbers with two different delimeters in between", () => {
	expect(add("1\n2,3")).toBe(6);
});
// Negative number exception test 1
it("Should throw an exception when it encounters negative numbers and list them", () => {
	expect(function(){add("-1,2")}).toThrow("Negatives not allowed:-1");
});
// Negative number exception test 2
it("Should throw an exception when it encounters negative numbers and list them", () => {
	expect(function(){add("2,-4,3,-5")}).toThrow(/^Negatives not allowed:-4,-5$/);
});
// Ignore numbers greater than 1000 
it("Should ignore numbers that are larger than 1000", () => {
	expect(add("1001,2")).toBe(2);
});