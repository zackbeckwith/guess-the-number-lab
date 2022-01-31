const game = {
  title: 'Guess the Number!',
  biggestNum: 101,
  smallestNum: 0,
  guess: null,
  prevGuesses: [],
  secretNum: null,
  getGuess: function () {
    this.guess = parseInt(prompt(`Enter a guess between ${this.smallestNum + 1} and ${this.biggestNum - 1}.`));

    while (isNaN(this.guess) || this.guess >= this.biggestNum || this.guess <= this.smallestNum){
      this.guess = parseInt(prompt(`Invalid answer. Enter a guess between ${this.smallestNum + 1} and ${this.biggestNum - 1}.`))
      }
    },

  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

    console.log(this.secretNum)
    game.getGuess()

    console.log(this.secretNum)
    
    while (this.guess !== this.secretNum) {
      this.prevGuesses.push(this.guess)
    
      alert(`Incorrect answer. Try again.
      Previous Attempts: ${this.prevGuesses.join(', ')}`)

      console.log(this.prevGuesses)
      game.getGuess()
    }
      alert('Correct!')

  }
}

game.play()