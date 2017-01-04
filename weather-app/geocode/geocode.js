const request = require('request');

function geocodeAddress(address){
	let encodedAddress = encodeURIComponent(`${
	address}`);
	console.log(address);
	request({
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`, 
		json: true,
	},(error, response, body)=>{
		if(error){
			console.log('Unable to connect to to Google servers');
		} 
		else if (body.status==='ZERO_RESULTS'){
			console.log('Unable to find address');
		}else if (body.status === 'OK'){
			console.log(`Address: ${body.results[0].formatted_address}`); 
			console.log(`Latitude: ${body.results[0].geometry.location.lat}`); 
			console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
		}
	});
}
module.exports = {geocodeAddress};