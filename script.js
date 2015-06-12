$(document).ready(function(){
	navigator.geolocation.getCurrentPosition(function(position){
		var koordinaten = {longitude: position.coords.longitude, latitude: position.coords.latitude};
	


		//forecast io
	$.ajax({
	url: 'https://api.forecast.io/forecast/fab736851cb5b4f591fac4a86ad0169c/' +koordinaten.latitude+','+koordinaten.longitude,
	data: {
		units: 'si',
		lang: 'de'
	},
	dataType: 'jsonp'

}).done(function(data) {

	console.log(data);
	$('.temp').text(data.currently.apparentTemperature+' °C') ;

			//google geocoding
			$.ajax({
				url: 'https://maps.googleapis.com/maps/api/geocode/json',
				data: {
					latlng: +koordinaten.latitude+','+koordinaten.longitude,
					key: 'AIzaSyDgYh-UffzCV54XCcReML4WSqyb0_zv8x8',
					language: 'de'
				}
			}).done(function(data) {
				console.log(data);
				$('.geoloc').text(data.results.0.formatted_address) ;
			});

		});

	});

});