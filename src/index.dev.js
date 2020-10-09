"use strict";

// You should implement your task here.
module.exports = function towelSort(matrix) {
  if (Array.isArray(matrix)) {
    var arr = new Array();

    for (var i = 0; i < matrix.length; i++) {
      if (i % 2 == 0) {
        for (var j = 0; j < matrix[i].length; j++) {
          arr.push(matrix[i][j]);
        }
      } else {
        for (var _j = matrix[i].length - 1; _j >= 0; _j--) {
          arr.push(matrix[i][_j]);
        }
      }
    }

    return arr;
  } else {
    return [];
  }
};