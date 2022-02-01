const game = {
  title: 'Guess the Number!',
  biggestNum: 101,
  smallestNum: 0,
  guess: null,
  prevGuesses: [],
  secretNum: null,
  hint: null,
  getGuess: function () {
    this.guess = parseInt(prompt(`Enter a guess between ${this.smallestNum + 1} and ${this.biggestNum - 1}.`));

    while (isNaN(this.guess) || this.guess >= this.biggestNum || this.guess <= this.smallestNum){
      this.guess = parseInt(prompt(`Invalid answer. Enter a guess between ${this.smallestNum + 1} and ${this.biggestNum - 1}.`))
      }
    },

  play: function() {
    this.setNum();
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

    game.getGuess();

    while (this.guess !== this.secretNum) {
      this.prevGuesses.push(this.guess)
      this.helper();
      this.render();
      game.getGuess();
    }
    this.render();
    return
  },
  render: function() {
    
    if (this.guess === this.secretNum){ alert(`Congrats! You guessed the number in ${this.prevGuesses.length + 1} turn(s)!`)
    }else{
      alert(`Your answer was too ${this.hint}. Try again.
      Previous Attempts: ${this.prevGuesses.join(', ')} `)
    }
  },
  helper: function() {
    if (this.guess > this.secretNum){
      this.biggestNum = this.guess
      this.hint = 'high'
    }else if (this.guess < this.secretNum) {
      this.smallestNum = this.guess
      this.hint = 'low'
    }
  },
  setNum: function() {
    this.smallestNum = parseInt(prompt(`Enter the range on the low end.`)) - 1
    this.biggestNum = parseInt(prompt(`Enter the range on the high end.`)) + 1
  }
}

game.play() 