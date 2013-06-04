var occurrences = require('../index');

occurrences('foobar', 'o', function(count) {
  console.log(count);
});