const express = require('express');
const yargs = require('yargs');
const axios = require('axios');
const hbs = require('hbs')
// Ideas for App improvement
// change the temperature (bugged - argv.alias not working)
// default location (can be set)
var app = express();

app.get('/',(req,res) => {
	res.render('weather.hbs',{
		pageTitle: 'Home Page',
		content: 'Get the Weather',	
		currentYear: new Date().getFullYear()
	});
});


app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'))


hbs.registerHelper('getWeather',(text)=> {
return 	text.toUpperCase();
});



app.listen(3000,() => {
	console.log('server is up on port 3000');
});
// let units = (argv.u || argv.units) || 'si';
// const defaultAddress = encodeURIComponent('brixton road london uk');
// const encodedAddress = argv.address?encodeURIComponent(argv.address) : defaultAddress;
// console.log('default address: ', defaultAddress, 'encodedAddress: ', encodedAddress);
//
// let geocodeUrl =
// 	`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
// console.log(encodedAddress?encodedAddress:defaultAddress);
// axios.get(geocodeUrl).then((response) => {
// 	if (response.data.status === 'ZERO_RESULTS') {
// 		throw new Error('Unable to find that address.');
// 	}
//
// 	let latitude = response.data.results[0].geometry.location.lat;
// 	let longitude = response.data.results[0].geometry.location.lng;
//
//
// 	const key = '15503e43cf3308e4388f9413a14906e9';
// 	let weatherUrl = `https://api.forecast.io/forecast/${key}/${latitude},${longitude}?units=${units}`;
// // 	console.log(argv.u);
// 	console.log(JSON.stringify(response.data,undefined,2));
// 	console.log('formatted address ', response.data.results[0].formatted_address);
//
//
//
// 	return axios.get(weatherUrl);
// }).then((response) => {
// 	let temperature = response.data.currently.temperature;
// 	let apparentTemperature = response.data.currently.apparentTemperature;
// 	console.log(`Its's currently ${temperature}. It feels like ${apparentTemperature}.`);
//
//
// }).catch((error) => {
// 	if (error.code) {
// 		console.log('Unable to connect to API server.');
// 	} else {
// 		console.log(error.message);
// 	}
// });
