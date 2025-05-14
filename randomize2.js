class NumberGame {
  constructor() {
    this.randomNumber = Math.floor(Math.random() * 101); // losowa liczba 0-100
    this.guesses = [];
  }

  addGuess(num) {
    this.guesses.push(num);
  }

  isNumberGuessed() {
    return this.guesses.includes(this.randomNumber);
  }

  guessesCount() {
    return this.guesses.length;
  }

  playUntilFound() {
    while (!this.isNumberGuessed()) {
      const guess = Math.floor(Math.random() * 101);
      this.addGuess(guess);
      console.log('Guess:', guess);
    }
    console.log(`Found the number ${this.randomNumber} after ${this.guessesCount()} guesses!`);
  }
}

// Przykład użycia:
const game = new NumberGame();
console.log('Random number to find:', game.randomNumber);
game.playUntilFound();
