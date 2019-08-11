'use strict';

// Shaves off John's beard, thereby tranforming "John" into "Jon"
module.exports = exports = (bitmap) => {
  let other = '244';
  for (let i = 5004; i < 5017; i++) {
    bitmap.buffer[i] = other;
  }
  let other2 = '244';
  for (let i = 4892; i < 4905; i++) {
    bitmap.buffer[i] = other2;
  }
  let other3 = '244';
  for (let i = 4780; i < 4793; i++) {
    bitmap.buffer[i] = other3;
  }
  let other4 = '244';
  for (let i = 4668; i < 4681; i++) {
    bitmap.buffer[i] = other4;
  }
  let other5 = '244';
  for (let i = 4556; i < 4569; i++) {
    bitmap.buffer[i] = other5;
  }
  let other6 = '244';
  for (let i = 4444; i < 4457; i++) {
    bitmap.buffer[i] = other6;
  }
  let other7 = '244';
  for (let i = 4332; i < 4345; i++) {
    bitmap.buffer[i] = other7;
  }
  let other8 = '244';
  for (let i = 5116; i < 5129; i++) {
    bitmap.buffer[i] = other8;
  }
  let other9 = '244';
  for (let i = 5228; i < 5241; i++) {
    bitmap.buffer[i] = other9;
  }
  let other10 = '244';
  for (let i = 5340; i < 5353; i++) {
    bitmap.buffer[i] = other10;
  }
  let other11 = '244';
  for (let i = 5452; i < 5465; i++) {
    bitmap.buffer[i] = other11;
  }
  let other12 = '244';
  for (let i = 5564; i < 5577; i++) {
    bitmap.buffer[i] = other12;
  }
  let other13 = '244';
  for (let i = 5676; i < 5689; i++) {
    bitmap.buffer[i] = other13;
  }
  let other14 = '244';
  for (let i = 5788; i < 5801; i++) {
    bitmap.buffer[i] = other14;
  }
  console.log(`"John" is now "Jon"`);
};
