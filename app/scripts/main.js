function loadData() {

	'use strict';

	// global variables
	var unitChecked = $('input[name="units"]:checked').val(),
		cityValue = $('input').val(),
		weatherUrl = 'http://api.openweathermap.org/data/2.5/weather',
		weather = $('.weather'),
		icon = $('.icon'),
		temperature = $('.temperature');
	
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
}

$('.form-container').submit(loadData);

