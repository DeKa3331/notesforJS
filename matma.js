class Stats {
  constructor(numbers) {
    this.numbers = numbers;
  }

  sum() {
    return this.numbers.reduce((acc, val) => acc + val, 0);
  }

  average() {
    return this.sum() / this.numbers.length;
  }

  harmonicMean() {
    let sumReciprocals = this.numbers.reduce((acc, val) => acc + 1 / val, 0);
    return this.numbers.length / sumReciprocals;
  }

  min() {
    return Math.min(...this.numbers);
  }

  max() {
    return Math.max(...this.numbers);
  }

  count() {
    return this.numbers.length;
  }
}


const myNumbers = [4, 8, 15, 16, 23, 42];
const stat = new Stats(myNumbers);

console.log('Sum:', stat.sum());
console.log('Average:', stat.average());
console.log('Harmonic Mean:', stat.harmonicMean());
console.log('Min:', stat.min());
console.log('Max:', stat.max());
console.log('Count:', stat.count());

/*
sztywne przypisanie
  constructor() {
    this.numbers = [5, 12, 7, 20, 3, 15]; // sztywno ustalona tablica
  }
  const stat = new Stats();
*/


