$(document).ready(function(){
	navigator.geolocation.getCurrentPosition(function(position){
		var koordinaten = {longitude: position.coords.longitude, latitude: position.coords.latitude};
	


	$ajax({
	url: 'https://api.forecast.io/forecast/fab736851cb5b4f591fac4a86ad0169c/' +koordinaten.latitude+','+koordinaten.longitude,
	data: {
		units: 'si',
		lang: 'de'
	},
	dataType: 'jsonp'

}).done(function(data) {

	console.log(data);
		});

	});

});