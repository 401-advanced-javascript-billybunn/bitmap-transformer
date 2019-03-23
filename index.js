'use strict';

const fs = require('fs');
const util = require('util');

const Bitmap = require('./lib/bitmap.js');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// Function of promises to read, a file, pass through the constructor, and write a new file
function transformWithPromises() {
  readFile(file) // read the bitmap file
    .then(buffer => {
      console.log(`read file "${file}"`);

      // pass through constructor module
      let bitmap = new Bitmap(buffer);

      // parse the bitmap buffer it returns
      bitmap.parse();

      // transform the buffer with whatever operation
      bitmap.transform(operation);
      // console.log(`performed operation "${operation}"`);

      // trigger another promise to write a file with the transformed buffer
      return writeFile('./yet-another-test.bmp', bitmap.buffer);
    })
    .then(() => console.log('wrote the new file'))

    .catch(err => console.error(`there was an error: ${err}`));
}

// CLI COMMAND: node index.js <file-to-change> <transformation>
// EXAMPLE: node index.js ./assets/baldy.bmp shave
const [file, operation] = process.argv.slice(2);

// Call function above
transformWithPromises();

/* 
index.js - kicks off the process itself
bitmap.js - define your bitmap itself
transforms/ - what code to run on that bitmap buffer
*/
