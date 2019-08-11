'use strict';

// Shaves off John's beard, thereby tranforming "John" into "Jon"
module.exports = exports = (error, file, operation) => {
  let reason = '';

  if (!file && !operation) reason = `You didn't specify a file and a transform operation.`;
  if (!file && operation) reason = `You didn't specify a file to tranform.`;
  if (file && !operation) reason = `You didn't specify a transform operation.`;

  if (file && operation) reason = `You typed an invalid transformation. Try again with an available transformation.`;
  if (error.message.includes('ENOENT')) reason = `You didn't specify a an existing bitmap file to transform.`;


  let message = `INVALID COMMAND: ${reason} You must specify a .bmp file and a transformation to preform on the file.

Available transformations: 'magenta', 'shave', 'tyson'
Example: 'node index.js assets/baldy.bmp shave'

EXACT ERROR:
${error}`;

  return console.error(message);
};
