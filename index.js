/* 
---------- INSTRUCTIONS ---------- 
In the CLI, enter the following:
node index.js <file-to-change> <transformation>

---------- WORKING COMMAND LINE ENTRIES ----------
node index.js ./assets/baldy.bmp magenta
- makes white colors magenta

node index.js ./assets/baldy.bmp shave
- shaves off Johns beard, effectively making "John" turn into "Jon"

---------- MODULES ----------
index.js - kicks off the process itself
bitmap.js - defines Bitmap class and constructor
error-handler.js - prints out a useful error message specific to the user's mistake
transforms/ - each module defines a specific tranformation referenced in bitmap.js
*/

'use strict';

const fs = require('fs');
const util = require('util');

const Bitmap = require('./lib/bitmap.js');
const usefulErrMessage = require('./lib/error-handler.js');


const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// Function of promises to read, a file, pass through the constructor, and write a new file
function transformWithPromises() {
  let filePath;
  readFile(file) // read the bitmap file
  // If Promise is fulfilled, construct, parse, and transform a Bitmap object
    .then(buffer => {
      // pass through constructor module
      let bitmap = new Bitmap(buffer, file);

      // parse the bitmap buffer it returns
      bitmap.parse();

      // transform the buffer with whatever operation
      bitmap.transform(operation);
      filePath = bitmap.newFilePath;

      // trigger another Promise to write a file with the transformed buffer
      return writeFile(bitmap.newFilePath, bitmap.buffer);
    })
    .then(() => console.log(`Created transformed bitmap at ${filePath}`))

    // If Promise is rejected, print a useful error message
    .catch(err => usefulErrMessage(err, file, operation));
}

const [file, operation] = process.argv.slice(2);
/*
---------- HOW THE LINE ABOVE WORKS ----------
The Node.js documentation states: 
"The process.argv property returns an array containing the command line arguments passed when the Node.js process was launched."

So process.argv contains the whole command line invocation.
process.argv = ['node', 'some-script.js', 'arg-one', 'arg-two', ...]

Another view of this:
process.argv[0] == 'node'
process.argv[1] == 'some-script.js'
process.argv[2] == 'arg-one'
process.argv[3] == 'arg-two'

If the user enters "node  index.js  assets/baldy.bmp  shave":
process.argv = ['node', 'index.js', 'assets/baldy.bmp', 'shave']

If we slice this array at index 2, we get back 'assets/baldy.bmp' and 'shave'.
Then we assign 

*/

// Call function above
transformWithPromises();
