// StringCalculator.js

function add(number) {
	if(number == "") {
		return 0;
	}
	else {
		return parseInt(number);
	}
}

module.exports = add; 