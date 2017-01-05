//Examples of using promises and chaining promises
let asyncAdd = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof a === 'number' && typeof b === 'number') {
				resolve(a + b);
			} else {
				reject('Arguments must be numbers');
			}
		}, 1500);
	});
};

asyncAdd(5, '8').then((res) => {
	console.log('Result: ', res);
	return asyncAdd(res, 33);
}).then((res) => {
	console.log('Should be 45', res);
}).catch((errorMessage) => {
	console.log(errorMessage);
});

// let somePromise = new Promise((resolve,reject) => {
// 	setTimeout(() => {
// 		resolve('Hey, it worked');
// 		reject('unable to fufill promise');
// 	},2500);
// });

// somePromise.then((message) => {
// 	console.log('success: ', message);
// }, (errorMessage) => {
// 	console.log('Error: ', errorMessage);
// });
