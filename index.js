module.exports = function (string, substring, callback) {
  var count     = 0;
  var position  = 0;
  var subLength = substring.length;

  if (string.length === 0 || subLength === 0) {
    return callback(0);
  }

  while (true) {
    position = string.indexOf(substring, position);

    if (position !== -1) {
      count++;
      position += subLength;
    } else {
      break;
    }
  }

  return callback(count);
};