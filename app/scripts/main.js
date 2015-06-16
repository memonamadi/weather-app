function loadData() {

	// global variables
	var mainContainer = $('.container'),
		formContainer = $('.form-container'),
		input = $('.form'),
		unitChecked = $('input[name="units"]:checked').val();
		weatherContainer = $('weather-container');
	
	// api variables
	var cityValue = $('input').val(),
		apiKey = 'f2a8f79bcec996237f96dbc08ef55dc3',
		weatherUrl = 'http://api.openweathermap.org/data/2.5/weather',
		weather = $('.weather'),
		icon = $('.icon'),
		temperature = $('.temperature'),
		isItSummerYet = $('.isItSummerYet');
	
	// ajax request
	$.ajax({
		url: weatherUrl,
		jsonp: 'callback',
		dataType: 'jsonp',
		cache: 'false',
		data: {
			q: cityValue,
			units: unitChecked
		},
		success: function(data) {
			// removes the weather icon before appending the next one
			icon.text('');
	 		weather.text(data.weather[0].description);
	 		icon.append('<img src= "http://openweathermap.org/img/w/' + data.weather[0].icon + '.png"/>');
	 		temperature.text(Math.round(data.main.temp));
	 	},
	 	error: function() {
	 		weather.text('The weather info cannot be loaded.');
	 	}
	});
	
	return false;
	
	init();
};

$('.form-container').submit(loadData);

