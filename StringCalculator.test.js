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