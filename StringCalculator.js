// StringCalculator.js

function add(number) {
	if(number == "") {
		return 0;
	}
	if(number.includes(",")) {
		var numberArray = number.split(",");
		var sum = 0; 
		sum = parseInt(numberArray[0]) + parseInt(numberArray[1]);
		return sum; 
	}
	else {
		return parseInt(number);
	}
}

module.exports = add; 