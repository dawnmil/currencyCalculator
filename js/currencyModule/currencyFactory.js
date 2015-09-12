/**
*This is a function to create objects with currency name and its conversion value
*/
function CurrencyObjectFactory(name, conversionValue) {
	var currencyObj = new Object(); 
		
		currencyObj.name = name;
		currencyObj.conversionValue = conversionValue;

	return currencyObj;

	

}