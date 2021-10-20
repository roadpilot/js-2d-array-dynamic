/*
542. 01 Matrix
Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
*/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  let rows = mat.length;
  let cols = mat[0].length;
  // console.log(rows,cols)
  if (rows === 0 || cols === 1) 
      return mat;
  let dist = [...Array(rows)].map(e => Array(cols).fill([]));
  // console.log(dist)

  //First pass: check for left and top
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (mat[i][j] === 0) {
              console.log(i,j)
              dist[i][j] = 0;
          } else {
              top = i ? mat[i-1][j] : Infinity
              left = j ? mat[i][j-1] : Infinity
              // console.log(top,left)
              dist[i][j] = Math.min(top, left) +1
          }   
      }
  }

  //Second pass: check for bottom and right
  for (let i = rows - 1; i >= 0; i--) {
      for (let j = cols - 1; j >= 0; j--) {
              bottom = i<rows-1 ? mat[i+1][j] : Infinity
              right = j<cols-1 ? mat[i][j+1] : Infinity
              dist[i][j] = Math.min(dist[i][j], bottom +1, right +1)
      }
  }
  return dist;
};