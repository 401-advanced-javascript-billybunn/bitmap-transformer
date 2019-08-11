'use strict';

// Changes white to magenta in color pallet 
module.exports = exports = (bitmap) => {

  // Put Mike Tyson tattoo edits here

  // Right now this just make a black stripe on his beard
  let other = '0';
  for (let i = 5004; i < 5017; i++) {
    bitmap.buffer[i] = other;
  }

  console.log('John has a new tattoo');
};
