const request = require('request');

let geocodeAddress = (address) => {
	return new Promise((resolve, reject) => {
		if (typeof address === 'string') {
			request({
				url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
				json: true
			}, (error, response, body) => {
				if (body.status === 'OK') {
					resolve({
						Address: body.results[0].formatted_address,
						Latitude: body.results[0].geometry.location.lat,
						Longitude: body.results[0].geometry.location.lng
					});
				} else if (body.status === 'ZERO_RESULTS') {
					reject('unable to locate address');
				}
			});
		} else {
			reject('Address must be a string');
		}
	});
};

geocodeAddress('00000').then((location) => {
	console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
	console.log(errorMessage);
});
