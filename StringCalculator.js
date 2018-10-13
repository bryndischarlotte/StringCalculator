// StringCalculator.js

function add(number) {
	// Zero numbers
	if(number == "") {
		return 0;
	}
	// Multiple numbers
	if(number.includes(",") || number.includes("\n")) {
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
	var numberArray = number.split(/[ , \n]/);
	var sum = 0; 
	var illegalArray = "";
	for(var i = 0; i < numberArray.length; i++) {
		// If negative number is encountered
        if(numberArray[i] < 0) {
            if(i == numberArray.length - 1) {
            	// Without comma at the end
                illegalArray += "" + numberArray[i];
            }
            else {
            	// With comma at the end
                illegalArray += "" + numberArray[i] + ",";
            }
        }
        // Filters out numbers that are greater than 1000 
        if(parseInt(numberArray[i]) <= 1000) {
        	sum += parseInt(numberArray[i]);
        }
	}
	// If there is anything in the negative array throw exception
	if(illegalArray.length > 0) {
        throw "Negatives not allowed:" + illegalArray;
    }
	return sum; 
}

module.exports = add; 