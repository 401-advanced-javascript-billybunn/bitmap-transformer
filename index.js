'use strict';

const fs = require('fs');
const util = require('util');

const Bitmap = require('./lib/bitmap.js');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


// // Make this into a class
// /**
//  * Bitmap -- receives a file name, used in the transformer to note the new buffer
//  * @param filePath
//  * @constructor
//  */
// function Bitmap(filePath) {
//   this.file = filePath;
// }

// // make this into a method on the class
// /**
//  * Parser -- accepts a buffer and will parse through it, according to the specification, creating object properties for each segment of the file
//  * @param buffer
//  */
// Bitmap.prototype.parse = function(buffer) {
//   this.buffer = buffer;
//   this.type = buffer.toString('utf-8', 0, 2);
//   //... and so on
// };

// // another class method
// /**
//  * Transform a bitmap using some set of rules. The operation points to some function, which will operate on a bitmap instance
//  * @param operation
//  */
// Bitmap.prototype.transform = function(operation) {
//   // This is really assumptive and unsafe
//   transforms[operation](this);
//   this.newFile = this.file.replace(/\.bmp/, `.${operation}.bmp`);
// };

// /**
//  * Sample Transformer (greyscale)
//  * Would be called by Bitmap.transform('greyscale')
//  * Pro Tip: Use "pass by reference" to alter the bitmap's buffer in place so you don't have to pass it around ...
//  * @param bmp
//  */
// const transformGreyscale = (bmp) => {

//   console.log('Transforming bitmap into greyscale', bmp);

//   //TODO: Figure out a way to validate that the bmp instance is actually valid before trying to transform it

//   //TODO: alter bmp to make the image greyscale ...

// };

// const doTheInversion = (bmp) => {
//   bmp = {};
// }

// /**
//  * A dictionary of transformations
//  * Each property represents a transformation that someone could enter on the command line and then a function that would be called on the bitmap to do this job
//  */
// const transforms = {
//   greyscale: transformGreyscale,
//   invert: doTheInversion
// };

// ------------------ GET TO WORK ------------------- //


// function transformWithCallbacks() {

//   fs.readFile(file, (err, buffer) => {

//     if (err) {
//       throw err;
//     }

//     bitmap.parse(buffer);

//     bitmap.transform(operation);

//     // Note that this has to be nested!
//     // Also, it uses the bitmap's instance properties for the name and thew new buffer
//     fs.writeFile(bitmap.newFile, bitmap.buffer, (err, out) => {
//       if (err) {
//         throw err;
//       }
//       console.log(`Bitmap Transformed: ${bitmap.newFile}`);
//     });

//   });
// }






// Set up promises to read, parse, and transform in order
function transformWithPromises() {
  // read the bitmap file
  console.log(`91: ${file}, ${operation}`);
  readFile(file)
    .then(buffer => {
      console.log('96: read the file');
      let bitmap = new Bitmap(buffer);
      console.log('98:', bitmap);
      console.log('99: passed through constructor');
      bitmap.parse();
      // console.log('101: ran parse method', bitmap);
      // console.log(bitmap.transform);

      bitmap.transform(operation);
      console.log('ran transform method:', operation);

      return writeFile('./yet-another-test.bmp', bitmap.buffer);
    })

    .then(() => console.log('wrote the new file'))

    .catch(err => console.error('there was an error'));

  // parse the bitmap buffer it returns

  // transform the buffer with whatever operation

  // write a new bitmap file with the new buffer

}


let file = 'assets/baldy.bmp';
let operation = 'magenta';

transformWithPromises();







// TODO: Explain how this works (in your README)
// node index.js <file-to-change> <operation to perform on it>
// node index.js ./assets/baldy.bmp greyscale
// const [file, operation] = process.argv.slice(2);

// Make construct a new bitmap instance (should use class in bitmap.js)
// let bitmap = new Bitmap(file);

// Call function above
// transformWithCallbacks();

