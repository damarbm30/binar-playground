const getArithmetic = (min, max) => {
  let array = [];

  for (let i = min; i <= max; i++) {
    min -= min - 1;
    const result = min + ((i - 1) * i) / 2;
    array.push(result);
  }
  return array;
};

console.log(getArithmetic(3, 5));
console.log(getArithmetic(1, 5));
console.log(getArithmetic(222, 232));
