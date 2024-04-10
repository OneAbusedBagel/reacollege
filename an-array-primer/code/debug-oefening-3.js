'use strict';

const cl = console.log;

const multiArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// Bug: Incorrect array length used in the outer loop
for (let i = 0; i < multiArray[0].length; i++) {
  for (let j = 0; j < multiArray.length; j++) {
    cl(multiArray[j][i]);
  }
}
