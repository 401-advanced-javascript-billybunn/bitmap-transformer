'use strict';

// Transform modules
const transformMagenta = require('./transforms/magenta.js');
const transformShave = require('./transforms/shave.js');
const transformTyson = require('./transforms/tyson.js');

// Defines offsets according to the bitmap docs
const FILE_SIZE_OFFSET = 2;
const WIDTH_OFFSET = 18;
const HEIGHT_OFFSET = 22;
const BYTES_PER_PIXEL_OFFSET = 28;
const COLOR_TABLE_OFFSET = 54;
const PIXEL_ARRAY_OFFSET = 1078; // 1078 - 54 = 1024 -> 1024/4 = 256 colors

// Class to read in a file and construct a new bitmap instance
class Bitmap {
  constructor(buffer, filePath) {
    this.buffer = buffer;
    this.filePath = filePath;

    // Dictionary of transforms, each refers to a module imported above
    this.transforms = {
      // Color pallet transforms
      magenta: transformMagenta,

      // Raster data transforms
      shave: transformShave,
      tyson: transformTyson,
    };
  }

  // Method to parse the bitmap buffer into useful data
  parse() {
    this.fileHead = this.buffer.toString('ascii', 0, 14);
    this.type = this.buffer.toString('utf-8', 0, 2);
    this.fileSize = this.buffer.readInt32LE(FILE_SIZE_OFFSET);
    this.bytesPerPixel = this.buffer.readInt16LE(BYTES_PER_PIXEL_OFFSET);
    this.height = this.buffer.readInt32LE(HEIGHT_OFFSET);
    this.width = this.buffer.readInt32LE(WIDTH_OFFSET);
    this.colorTable = this.buffer.readInt32LE(COLOR_TABLE_OFFSET);
    this.pixelArray = this.buffer.readInt32LE(PIXEL_ARRAY_OFFSET);

    this.slicedBuffer = this.buffer.slice(PIXEL_ARRAY_OFFSET);

    this.colorsArray = this.buffer.slice(54, 1078);
  }
  
  // Method to call operation listed in the "transforms" property above
  transform(operation) {
    this.transforms[operation](this);
    // Creates a new file path where the tranformed bitmap will be written
    // 'assets/baldy.bmp' -> 'assets/baldy.operation.bmp
    this.newFilePath = this.filePath.replace(/\.bmp/, `.${operation}.bmp`);
  }
}

module.exports = Bitmap;
