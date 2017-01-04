const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
const yargs = require('yargs');

const argv = yargs.options({
	a: {
		demand: true,
		alias: 'address',
		describe: 'Address to fetch weather for',
		string: true
	}
})
	.help()
	.alias('help', 'h')
	.argv;

let latitude = 37.8267;
let longitude = -122.4233;

weather.getForecast(latitude, longitude, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(JSON.stringify(results, undefined, 2));
	}
});
geocode.geocodeAddress(argv.address, (errorMessage, weatherResults) => {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(JSON.stringify(weatherResults, undefined, 2));
	}
});
