const transpose = function (matrix) {
  let matrixT = []
  for(let i=0; i < matrix[0].length; i++){
    matrixT[i]=[]
    for(let j=0; j < matrix.length; j++){
      matrixT[i].push(matrix[j][i])
    }
  } return matrixT
};



module.exports = transpose
