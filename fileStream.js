
const axios = require('axios');
const fs = require('fs');
const crypto = require('crypto');

const main = () => {
	axios.get('https://coderbyte.com/api/challenges/json/age-counting')
		.then(resp => {
			const data = resp.data.data.split(','); // Split string in to key value

			// now normalize and group each corresponding item into an object
			const keyValueObjects = convertToKeyValueObject(data);
			const keysFilteredByAge = filterKeysByAge(keyValueObjects, '32');
			console.log('Key counts having age 32 = ', keysFilteredByAge.length);
			writeToFile(keysFilteredByAge);
		})
		.catch(err => console.log('[Axios: Error fetching endpoint]', err));
};

// We can also use a lodash or an underscorejs _.countBy
const filterKeysByAge = (arr, age) => arr.filter(arritem => arritem.age == age);

/**
   * [The method transfprms the key/ value array items into a single object array collection]
   *
   */
const convertToKeyValueObject = data => {
	const arr = [];

	for (let i = 0; i <= data.length; i += 2) {
		try {
			const item = data[i]?.trim();

			if (item && item.startsWith('key=')) {
				arr.push({
					key: item.split('=')[1],
					age: data[i + 1]?.trim().split('=')[1],
				});
			}
		} catch (error) {
			return error;
		}
	}

	return arr;
};

const writeToFile = data => {
	const fileStream = fs.createWriteStream('output.txt');

	fileStream.on('finish', updateHash);

	data.forEach(item => {
		fileStream.write(`${item.key}\n`);
	});

	fileStream.end();
};

const updateHash = () => {
	const fileBuffer = fs.readFileSync('output.txt');
	const hashSum = crypto.createHash('sha1');
	hashSum.update(fileBuffer);
	const hex = hashSum.digest('hex');
	console.log(hex);
};

module.exports = main;
