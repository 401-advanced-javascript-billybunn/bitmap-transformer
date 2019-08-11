![CF](http://i.imgur.com/7v5ASc8.png) PROJECT
=================================================

<!-- LINKS -->
<!-- Replace the link for each in brackets below -->
<!-- PR (working into submission) -->
[1]: https://github.com/401-advanced-javascript-billybunn/bitmap-transformer/pull/1
<!-- travis build -->
[2]: https://travis-ci.com/401-advanced-javascript-billybunn/bitmap-transformer/builds/105555337
<!-- back-end -->
[3]: http://xyz.com
<!-- front-end -->
[4]: http://xyz.com
<!-- swagger -->
[5]: http://xyz.com
<!-- jsdoc-->
[6]: heroku-link/docs 

## Buffers - Bitmap Transformer 

### Authors: Billy Bunn & Jon Gentry

### Links and Resources
[![Build Status](https://www.travis-ci.com/401-advanced-javascript-billybunn/bitmap-transformer.svg?branch=working)](https://www.travis-ci.com/401-advanced-javascript-billybunn/bitmap-transformer)
* [PR][1]
* [travis][2]
<!-- (when applicable) -->
<!-- * [back-end][3] -->
<!-- (when applicable) -->
<!-- * [front-end][4] -->

#### Documentation
<!-- API assignments only -->
<!-- * [swagger][5] -->
<!-- (All assignments) -->
* [jsdoc][6]

### Modules

#### `index.js`
##### Exported Values and Methods

###### `transformWithPromises(file, operation) -> new transformed .bmp file`
Passes in commands from the CLI to read a `.bmp` file and write a new, transformed `.bmp` file. Uses `bitmap.js` to construct a new instance, which in turn uses modules from the `transforms/` folder to edit the bitmap files buffer and create a new file with that buffer.

**Note:** The starter code for this project indicated we must provide an explaination for how CLI commands are processed in the app. See `index.js` code for a thorough explanation of how `process.argv` works in Node.js.


#### `lib/error-handler.js`
##### Exported Values and Methods

###### `usefulErrMessage(err, file, operation) -> print-out on console`
Creates and prints a useful error message to the user if an invalid CLI command is used. The message printed-out is unique to the entry error. The end of every error message includes the exact error found.

This error-handler accounts for the following user entry scenarios:
1. No arguments were entered (`node index.js`)
2. No transform operation was entered (`node index.js assets/baldy.bmp`)
3. An invalid transform operation was entered (`node index.js assets/baldy.bmp blah`)
4. An invalid filepath was entered (`node index.js blah shave`)

#### `lib/bitmap.js`
##### Exported Values and Methods

###### `new Bitmap(file) -> object`
Exports a Bitmap class and object constructor to `index.js`. 

Each 8-bit `.bmp` file passed through this constructor gets the following methods:

* `parse()` - Turns bitmap buffer data into useful object properties on the instance.
* `transform(operation)` - Performs an operation on the instance to transform its buffer. Valid arguments for this method include all properties within the `.transforms` property of each instance.

#### `lib/transforms/`
Each transform method is exported to `bitmap.js` to create a new file named `<old-file-name>.<operation>.bmp` in the `transforms/` folder. 

See the unique outputs of the files created with each module below.

##### Exported Values and Methods (for each module)

###### `magenta.js` - `transformMagenta(bitmap) -> buffer`
For a given 8-bit bitmap buffer, changes the last color in the color palatte (index 255) to the RGBA value for magenta. This should be the lightest color in the color palatte. 

When performed on the `baldy.bmp` starter file in this repo, this changes all the white pixels to magenta (the background and Johns eye's).

###### `shave.js` - `transformShave(bitmap) -> buffer`
For a given 8-bit bitmap buffer, changes several rows of pixels in the bitmap to the color at index 244 in the color palatte. 

When performed on the `baldy.bmp` starter file in this repo, this changes all the pixels in John's beard to be his skin color. It shaves his beard, effectively transforming "John Cokos" into "Jon Gentry".

###### `tyson.js` - `transformTyson(bitmap) -> buffer`
For a given 8-bit bitmap buffer, changes several rows of pixels in the bitmap to the darkest color in the color palatte (index 0 of 255). 

When performed on the `baldy.bmp` starter file in this repo, this adds a regrettable, albeit badass, tattoo on John's face.

### Setup
#### `.env` requirements
* `npm i` - install all dependencies lsited in `package.json`


#### Running the app
* `node index.js <file> <transformation>`
  
#### Tests
* How do you run tests?
  * `npm run test`
  * `npm run lint`
* What assertions were made?
* What assertions need to be / should be made?

#### UML
<!-- Link to an image of the UML for your application and response to events -->
![UML Diagram](https://imgur.com/STXbsew.png)
