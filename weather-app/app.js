const request = require('request');

request({
	url: 'https://maps.googleapis.com/maps/api/geocode/json?address=204a%20brixton%20road%20london%20uk',
	json: true,
},(error, response, body)=>{
  if(error){
    console.log(code);  
  }
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});



