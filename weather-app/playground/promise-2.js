var geocodeAddress = (address) => {
	return new Promise((resolve, reject) => {
		if (typeof address === 'string') {
			resolve({
				address: address
			});
		} else {
			reject('Address must be a string');
		}
	});
};

geocodeAddress('19146').then((location) => {
	console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
	console.log(errorMessage);
});
