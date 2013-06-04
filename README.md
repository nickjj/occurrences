# <a href="#occurrences" name="occurrences">Occurrences</a> [![Build Status](https://secure.travis-ci.org/nickjj/occurrences.png)](http://travis-ci.org/nickjj/occurrences)

Count the occurrences of a substring within a string and keep track of each occurrence's position.

## Installation

    $ npm install occurrences

## Usage

```js
var occurrences = require('occurrences');

occurrences('foobar', 'o', function(result) {
  console.log('Occurrences: ' + result.count);
  console.log('Positions of each occurrence: ' + result.positions);
});
```

## Example

    $ cd example
    $ node demo.js

## Test
    $ npm install
    $ make test