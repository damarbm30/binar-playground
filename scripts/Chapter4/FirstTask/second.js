class FinalValue {
  constructor(operators) {
    this.operators = operators;
  }

  getFinalValue() {
    let value = 0;

    for (let i = 0; i < this.operators.length; i++) {
      if (this.operators[i] === "++X" || this.operators[i] === "X++") {
        value++;
      } else if (this.operators[i] === "--X" || this.operators[i] === "X--") {
        value--;
      }
    }
    return value;
  }

  getOperationDetail() {
    let operator;
    let operatorArray = [];

    for (let i = 0; i < this.operators.length; i++) {
      if (this.operators[i] === "++X" || this.operators[i] === "X++") {
        operator = "increment";
        operatorArray.push(operator);
      } else if (this.operators[i] === "--X" || this.operators[i] === "X--") {
        operator = "decrement";
        operatorArray.push(operator);
      }
    }

    return operatorArray;
  }
}

let operations = ["++X", "++X", "X++"];

const newOperations = new FinalValue(operations);
console.log(newOperations.getFinalValue());
console.log(newOperations.getOperationDetail());
