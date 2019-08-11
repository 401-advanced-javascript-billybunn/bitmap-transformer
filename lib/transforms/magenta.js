'use strict';

// Changes white to magenta in color pallet 
module.exports = exports = (bitmap) => {
  bitmap.buffer[1145] = 0; // A
  bitmap.buffer[1144] = 255; // R
  bitmap.buffer[1143] = 0; // G
  bitmap.buffer[1142] = 255; // B
  console.log('white is now magenta and John looks really stoned');
};
