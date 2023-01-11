function pascalTriangle(numRows) {
  let arr = [];

  for (let i = 1; i <= numRows - 1; i++) {
    // create 2D array
    arr[i] = [];
    // first element of array always be 1
    arr[0] = [1];
    arr[i][0] = 1;

    for (let j = 1; j < i; j++) {
      arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
    }

    // last element of array always be 1
    arr[i][i] = 1;
  }

  console.log(arr[2][0]);

  return arr;
}

console.log(pascalTriangle(5));
