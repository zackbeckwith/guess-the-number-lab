const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  guess: null,
  prevGuessesPre: [],
  prevGuesses: [],
  secretNum: null,
  getGuess: function () {
    this.guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`));

    while (isNaN(this.guess) || this.guess >= this.biggestNum || this.guess <= this.smallestNum){
      this.guess = parseInt(prompt(`Invalid answer. Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`))
      }
    },

  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum,

    console.log(this.secretNum)
    game.getGuess()

    console.log(this.secretNum)
    
    while (this.guess !== this.secretNum) {
      this.prevGuessesPre.push(this.guess)
      this.prevGuesses = this.prevGuessesPre.join(', ') 
    
      alert(`Incorrect answer. Try again.
      Previous Attempts: ${this.prevGuesses}`)

      console.log(this.prevGuesses)
      game.getGuess()
    }
      alert('Correct!')

  }
}

game.play()