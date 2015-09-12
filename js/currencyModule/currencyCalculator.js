//Functions are first class citizens. They are object attributes

/**
*This creates an empty array to store currency/converstion information received
*/


/**
* Set up to request data from JSON 
*/
function CurrencyCalculatorWorkings() {
	
	var currencyCalculator = new Object();


/**
*Creating an empty array to hold the data that will be parsed
*/
	currencyCalculator.currencyObjectCollection =[];

	currencyCalculator.RequestData = function(url) {
		var request = new XMLHttpRequest();
		request.open('GET', url);

		request.onreadystatechange = function(){
			if((request.status==200) && (request.readyState==4)){
				console.log(request.responseText);
			}
		}
		request.send();
	}

	currencyCalculator.Convert = function(value){

	}

	currencyCalculator.Display = function(){

	}
/**
* Requesting the data from url
*/
	currencyCalculator.RequestData("http://coinabul.com/api.php");
	return currencyCalculator;
}


CurrencyCalculatorWorkings();



