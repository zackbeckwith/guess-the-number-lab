const game = {
  title: 'Guess the Number!',
  biggestNum: 101,
  smallestNum: 0,
  guess: null,
  prevGuesses: [],
  secretNum: null,
  getGuess: function () {
    this.guess = parseInt(prompt(`Enter a guess between ${this.smallestNum + 1} and ${this.biggestNum - 1}. The answer is: ${this.secretNum}`));

    while (isNaN(this.guess) || this.guess >= this.biggestNum || this.guess <= this.smallestNum){
      this.guess = parseInt(prompt(`Invalid answer. Enter a guess between ${this.smallestNum + 1} and ${this.biggestNum - 1}.`))
      }
    },

  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

    game.getGuess();

    while (this.guess !== this.secretNum) {
      this.prevGuesses.push(this.guess)
      this.render();
      game.getGuess();
    }
    this.render();
    return
  },
  render: function() {
    if (this.guess === this.secretNum){ alert(`Congrats! You guessed the number in ${this.prevGuesses.length + 1} turn(s)!`)
    }else{
      alert(`Incorrect answer. Try again. The answer is: ${this.secretNum}.
      Previous Attempts: ${this.prevGuesses.join(', ')} `)
    }
  }
}

game.play()