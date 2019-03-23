'use strict';

module.exports = exports = (bitmap) => {
  console.log('ran magenta module');
  // change white to magenta
  // A
  bitmap.buffer[1145] = 0;
  // R
  bitmap.buffer[1144] = 153;
  // G
  bitmap.buffer[1143] = 102;
  // B
  bitmap.buffer[1142] = 255;
};
