$(document).ready(function(){
	navigator.geolocation.getCurrentPosition(function(position){
		var koordinaten = {longitude: position.coords.longitude, latitude: position.coords.latitude};
		var icon;
		var skycons = new Skycons({
		color: "grey",
		resizeClear: true,
		});


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
	$('.forecast').text(data.daily.summary) ;
	$('.minmax').text('Minimal Temperatur: '+data.daily.data[0].apparentTemperatureMin+' °C ¦ Maximal Temperatur: '+data.daily.data[0].apparentTemperatureMax+' °C') ;
	
	icon = data.currently.icon.toUpperCase();
	console.log(icon);

	skycons.add($('.js-icon')[0], icon)

	skycons.play();

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
				$('.geoloc').text(data.results[0].address_components[1].long_name) ;
				$('.adresse').text(data.results[0].formatted_address) ;
			});

		});

	});

	
	
});

