// StringCalculator.js

function add(number) {
	// Zero numbers
	if(number == "") {
		return 0;
	}
	// Multiple numbers
	if(number.includes(",")) {
		return sumOf(number);
	}
	// Single number
	else {
		return parseInt(number);
	}
}

/* Functions */

// Sum of numbers in string
function sumOf(number) {
	var numberArray = number.split(",");
	var sum = 0; 
	for(var i = 0; i < numberArray.length; i++) {
		sum += parseInt(numberArray[i]);
	}
	return sum; 
}

module.exports = add; 