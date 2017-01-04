const request = require('request');
const key ='15503e43cf3308e4388f9413a14906e9';

function geocodeAddress(address, callback) {
	let encodedAddress = encodeURIComponent(`${
	address}`);
	console.log(address);
	request({
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
		json: true,
	}, (error, response, body) => {
		if (error) {
			callback('Unable to connect to to Google servers');
		} else if (body.status === 'ZERO_RESULTS') {
			callback('Unable to find address');
		} else if (body.status === 'OK') {
			callback(undefined, {
				address: body.results[0].formatted_address,
				Latitude: body.results[0].geometry.location.lat,
				Longitude: body.results[0].geometry.location.lng
			});
		}
	});
}
module.exports = {
	geocodeAddress
};
