'use strict';

const cl = console.log;

const multiArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// Bug: Incorrect order of loop indices
for (let j = 0; j < multiArray[0].length; j++) {
  for (let i = 0; i < multiArray.length; i++) {
    cl(multiArray[i][j]);
  }
}
