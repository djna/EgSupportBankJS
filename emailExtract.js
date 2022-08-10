

"use strict";

import lineReader from 'line-reader';

const filename = 'sample.txt';

lineReader.eachLine(filename, function(line, last) {
  console.log(`Line from file: ${line}`);
  if(last) {
    console.log('Last line printed.');
  }
});

