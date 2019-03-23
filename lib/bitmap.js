// Bitmap class goes here
// Reads in a file and make a new bitmap instance.
// in that class, go in an do some stuff. Note some things about the bitmap itself
// Class that knows how to break up a bitmap file into a buffer


// the transforms can be run on each instance of these buffers and transform it somehow
// 

/* 
index.js - kicks off the process itself
bitmap.js - define your bitmap itself
transforms/ - what code to run on that bitmap buffer
*/


'use strict';

const fs = require('fs');

// NO, you may not read synchronosly ... this is only for expedience in the demo
// const buffer = fs.readFileSync(`${__dirname}/../assets/baldy.bmp`);

// Create a naked object to model the bitmap properties
const parsedBitmap = {};

// Identify the offsets by reading the bitmap docs
const FILE_SIZE_OFFSET = 2;
const WIDTH_OFFSET = 18;
const HEIGHT_OFFSET = 22;
const BYTES_PER_PIXEL_OFFSET = 28;
const COLOR_TABLE_OFFSET = 54;
const PIXEL_ARRAY_OFFSET = 1078; // 54 for header + 256 for color table

class Bitmap {
  constructor(file) {
    this.buffer = fs.readFileSync(file);
  }
  parse() {
    this.fileHead = this.buffer.toString('ascii', 0,14); //?
    this.type = this.buffer.toString('utf-8', 0, 2);
    this.fileSize = this.buffer.readInt32LE(FILE_SIZE_OFFSET);
    this.bytesPerPixel = this.buffer.readInt16LE(BYTES_PER_PIXEL_OFFSET);
    this.height = this.buffer.readInt32LE(HEIGHT_OFFSET);
    this.width = this.buffer.readInt32LE(WIDTH_OFFSET);
    this.colorTable = this.buffer.readInt32LE(COLOR_TABLE_OFFSET);
    this.pixelArray = this.buffer.readInt32LE(PIXEL_ARRAY_OFFSET);

    this.slicedBuffer = this.buffer.slice(PIXEL_ARRAY_OFFSET);

    this.colorsArray = this.buffer.slice(54, 1078);

    //... and so on
  }

  transform(operation) {

  }

}

// let bitmapInstance = new Bitmap(`${__dirname}/../assets/baldy.bmp`); //?
let bitmapInstance = new Bitmap(`${__dirname}/../assets/baldy.bmp`);

bitmapInstance.parse();
console.log(bitmapInstance.fileHead);
// console.log(bitmapInstance);
// let num = bitmapInstance.buffer.length;
// bitmapInstance.buffer[num]; //?
// bitmapInstance.buffer[55] = 'ff'; //?
// 54 - 1145 is the color pallet
// for (let i = 54; i < 1145; i++) {
//   console.log(bitmapInstance.buffer[i]);
// }

let val = 57;
bitmapInstance.buffer[54]; //?

bitmapInstance.buffer[55]; //?
bitmapInstance.buffer[56]; //?
bitmapInstance.buffer[57]; //?
bitmapInstance.buffer[58]; //?

bitmapInstance.buffer[59]; //?
bitmapInstance.buffer[60]; //?
bitmapInstance.buffer[61]; //?
bitmapInstance.buffer[62]; //?

console.log(bitmapInstance.buffer[val]);

/*
1145 is opacity
1144 red
green
blue

pixel array starts at 1146
256*4 = 1024

1145 - 1024 = 121

121 to 1144
*/


bitmapInstance.buffer[1145]; //?
bitmapInstance.buffer[1144]; //?
bitmapInstance.buffer[1143]; //?
bitmapInstance.buffer[1142]; //?

// R-G-B-A
// change white to magenta
// A
bitmapInstance.buffer[1145] = 0; //?
// R
bitmapInstance.buffer[1144] = 153; //?
// G
bitmapInstance.buffer[1143] = 102; //?
// B
bitmapInstance.buffer[1142] = 255; //?

bitmapInstance.colorsArray.length; //?

// A
bitmapInstance.colorsArray[0]; //?
// R
bitmapInstance.colorsArray[1]; //?
// G
bitmapInstance.colorsArray[2]; //?
// B
bitmapInstance.colorsArray[3]; //?

// A
bitmapInstance.colorsArray[1020]; //?
// R
bitmapInstance.colorsArray[1021]; //?
// G
bitmapInstance.colorsArray[1022]; //?
// B
bitmapInstance.colorsArray[1023]; //?

// console.log(bitmapInstance.colorsArray);

console.log(bitmapInstance.colorsArray[0]);

bitmapInstance.colorsArray.length; //?
let chunkedArray = [];
for (let i = 0; i < bitmapInstance.colorsArray.length; i+=4) {
  let chunk = bitmapInstance.colorsArray.slice(i, i + 4);
  chunkedArray.push({ [(i/4)] : chunk });
}
console.log(chunkedArray[255]);
console.log(chunkedArray[0]);


chunkedArray.length;

chunkedArray; 




// console.log(new Bitmap(`${__dirname}/../assets/baldy.bmp`));
function makeABitmapFile(fileName, buffer) {
  fs.writeFile(fileName, buffer, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}
// makeABitmapFile('./another-test.bmp', bitmapInstance.buffer);


// let newVal = 10000000;
// for (let i = 8000; i < bitmapInstance.buffer.length; i++) {
//   bitmapInstance.buffer[i] = newVal;
// }
/**
 * // Bottom left boundary = 1146
// Top right boundary = bald.length
// Color table
let other = '0f29a';
for (let i = 2000; i < bald.length; i++) {
  //  bald[i] = other;
}
 */