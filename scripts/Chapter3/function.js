function oddNumber(n) {
  let array = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      array.push(i);
    }
  }

  return array;
}

function programmerRank(salary) {
  let message;

  if (salary <= 12000000 && salary >= 6000000) {
    message = "Junior programmer";
  } else if (salary < 20000000 && salary > 12000000) {
    message = "Mid programmer";
  } else if (salary < 35000000 && salary >= 20000000) {
    message = "Senior programmer";
  } else if (salary < 50000000 && salary >= 35000000) {
    message = "Lead programmer";
  } else {
    message = "Unknown";
  }

  return message;
}

console.log(oddNumber(200));
console.log(programmerRank(8000000));
