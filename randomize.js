class NumberGame {
  constructor() {
    this.randomNumber = Math.floor(Math.random() * 101);
    this.guesses = [];
  }

  addGuess(num) {
    if (num >= 0 && num <= 100) {
      this.guesses.push(num);
    } else {
      console.log('Guess out of range (0-100)');
    }
  }

  isNumberGuessed() {
    return this.guesses.includes(this.randomNumber);
  }

  guessesCount() {
    return this.guesses.length;
  }
}

const game = new NumberGame();
game.addGuess(10);
game.addGuess(25);
game.addGuess(50);
console.log('Random number:', game.randomNumber);
console.log('Is guessed?', game.isNumberGuessed());
console.log('Number of guesses:', game.guessesCount());
