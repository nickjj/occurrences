var occurrences = require('../index');

occurrences('foobar', 'o', function(result) {
  console.log('Occurrences: ' + result.count);
  console.log('Positions of each occurrence: ' + result.positions);
});