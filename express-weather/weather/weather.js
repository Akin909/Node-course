const request = require('request');

const key = '15503e43cf3308e4388f9413a14906e9';

function getForecast(latitude, longitude, callback) {
	request({
		url: `https://api.forecast.io/forecast/${key}/${latitude},${longitude}`,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback('Unable to connect to to Forecast.io server');
		} else {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		}
	});
}

module.exports = {
	getForecast
};
