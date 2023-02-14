/**
 * Desafio: escrever uma função que valide a solução de um jogo de Sudoku.
 * A função irá receber um array bi-dimensional (NxN) com inteiros de 1 a N, e deve retornar um booleano informando se o preenchimento está correto.
 *
 * Exemplo de um valor de entrada:
 * [
 *   [7,8,4,  1,5,9,  3,2,6],
 *   [5,3,9,  6,7,2,  8,4,1],
 *   [6,1,2,  4,3,8,  7,5,9],
 *
 *   [9,2,8,  7,1,5,  4,6,3],
 *   [3,5,7,  8,4,6,  1,9,2],
 *   [4,6,1,  9,2,3,  5,8,7],
 *
 *   [8,7,6,  3,9,4,  2,1,5],
 *   [2,4,3,  5,6,1,  9,7,8],
 *   [1,9,5,  2,8,7,  6,3,4]
 * ]
 *
 * Para maiores informações sobre Sudoku:
 * https://pt.wikipedia.org/wiki/Sudoku
 *
 * Voce pode testar o seu codigo rodando o comando `npm test` no terminal
 * e tambem pode alterar o arquivo `index.test.js` se desejar.
 * Apos enviado, seu codigo sera validado com outros cenarios de teste tambem.
 *
 * @param array array bidimensional de inteiros
 * @returns `true` ou `false`, informando se o preenchimento está correto
 */
function sudoku(array) {
  let matrixQuadratica = verificarMatrixQuadratica(array);
  let matrixRept = verificarMatrixRepetida(array);

  if (matrixQuadratica && !matrixRept) {
    return validaArray(array);
  } else return false;
}

function verificarMatrixQuadratica(sudo) {
  for (let x = 0; x < sudo.length; x++) {
    const element = sudo[x];
    if (sudo.length != element.length) return false;
    //console.log('x=' + x, sudo.length, element.length );
    //  console.log(testaLinha);
  }
  return true;
}

function verificarMatrixRepetida(sudo) {
  for (let x = 0; x < sudo.length; x++) {
    const element = sudo[x];

    if (checkArrays(sudo[x], sudo[x + 1])) return true;
  }
  return false;
}

function checkArrays(a1, a2) {
  return JSON.stringify(a1) === JSON.stringify(a2);
}

function validaArray(sudo) {
  for (let x = 0; x < sudo.length; x++) {
    const element = sudo[x];
    let testaLinha = [];
    let testaCol = [];
    for (let y = 0; y < element.length; y++) {
      //const subelement = sudo[x][y];
      //   console.log('x='+ x,'y=' + y,subelement);
      if (testaLinha.includes(element[x][y])) {
        return false;
      }
      testaLinha.push(sudo[x][y]);

      if (testaCol.includes(element[y][x])) {
        return false;
      }
      testaCol.push(sudo[y][x]);
    }
  }
  return true;
}

module.exports = sudoku;
