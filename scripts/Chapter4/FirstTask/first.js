let newArray = [];

for (let i = 1; i <= 500; i++) {
  let number = i + (i - 1);
  newArray.push(number);
}

class Row {
  constructor(array) {
    this.array = array;
  }

  getElementsIndex(array) {
    let indexOfElements = [];
    let index;

    for (let i = 0; i < array.length; i++) {
      index = this.array.indexOf(array[i]);
      if (index === -1) {
        index = "Elemen tidak ada dalam array";
      }
      indexOfElements.push(`${array[i]} => ${index}`);
    }
    return indexOfElements;
  }

  getValueByIndex(index) {
    return this.array[index];
  }

  sortArrayDesc() {
    return this.array.sort((a, b) => b - a);
  }
}

const firstRow = new Row(newArray);
console.log(firstRow.getElementsIndex([52, 55, 57, 68, 77]));
console.log(firstRow.getValueByIndex(0));
console.log(firstRow.sortArrayDesc());
