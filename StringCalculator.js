// StringCalculator.js

function add(number) {
	// Zero numbers
	if(number == "") {
		return 0;
	}
	// Multiple numbers
	if(number.includes(",")) {
		var numberArray = number.split(",");
		var sum = 0; 
		for(var i = 0; i < numberArray.length; i++) {
			sum += parseInt(numberArray[i]);
		}
		return sum; 
	}
	// Single number
	else {
		return parseInt(number);
	}
}

module.exports = add; 