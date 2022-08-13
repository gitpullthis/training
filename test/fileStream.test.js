const main = require('../fileStream');
const fs = require('fs');

// Call main and expect presence of an output file

test('it should generate an output file', () => {
	expect.assertions(1);
	main();
	const filedata = fs.readFileSync(__dirname + '/../output.txt', {encoding: 'utf8'});
	expect(filedata.length).toBeGreaterThan(0);
});

// Expect six lines in an output file

