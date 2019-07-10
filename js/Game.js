/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {

    constructor() {

      this.missed = 0;					
      this.phrases = this.createPhrases();
      this.activePhrase = null;
    }
  
    // Creates and returns an array of phrases for use in game
    createPhrases() {

        let phrases = [
            new Phrase("Do what you love and do it often"),
            new Phrase("Believe in yourself"),
            new Phrase("What worries you masters you"),
            new Phrase("Change your thoughts and you change your world"),
            new Phrase("Bravery is the solution to regret")
        ];

        return phrases
    }
      
    // Selects random phrase from phrases property and returns phrase object chosen to be used
    getRandomPhrase() {

        let randomNumber = Math.floor( Math.random() * this.phrases.length );

        return this.phrases[randomNumber];
    }
      
    
    // Begins game by selecting a random phrase and displaying it to user
    startGame() {

        const overlay = document.querySelector('#overlay');

        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();	
    }	
      
    // Check to see if the player has revealed all of the letters in the active phrase. 
    checkForWin() {

        let phraseLetters = document.querySelectorAll('.letter');
        let visableLetters = document.querySelectorAll('.show');

        if (visableLetters.length === phraseLetters.length) {

            return true;

        } else {

            return false;
        }
    }
      
    /* Increases the value of the missed property 
    * Removes a life from the scoreboard
    * Checks if [layer has remaining lives and ends game if player is out]
    */
    removeLife() {

        let lives = document.querySelector('.tries');
        let lifeHeart = lives.firstChild;

        this.missed += 1;
    
        lives.classList.remove('tries');
        lifeHeart.src = "images/lostHeart.png";

        if (this.missed === 5) {

            this.gameOver(false);
        }
    }

    // Displays game over message
    gameOver(gameWon) {
        const overlay = document.querySelector('#overlay');	
        const gameOverMessage = document.querySelector('#game-over-message');

        overlay.style.display = 'flex';	
        overlay.classList.remove('start');

        if (gameWon) {

            overlay.classList.add('win');
            gameOverMessage.textContent = "Awesome! You Won!";

        } else {

            overlay.classList.add('lose');
            gameOverMessage.textContent = "Ouch. Too bad, you lost! Try again!";
        }
    }
      
    handleInteraction(keyChosen) {
        let letter = keyChosen.textContent;
        keyChosen.disabled = true;	
          
        if (this.activePhrase.checkLetter(letter)) {

            keyChosen.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);

            if (this.checkForWin()) {

                this.gameOver(true);
            }
        } else {

            keyChosen.classList.add('wrong');
            this.removeLife();
        }
    
    }
        
    // Resets game
    resetGame() {
        
        const overlay = document.querySelector('#overlay');	
        const ul = document.querySelector('#phrase ul');
        const keys = document.querySelectorAll('.key');
        const hearts = document.querySelectorAll('#scoreboard ol li');
            
        overlay.classList.remove('win', 'lose');
        overlay.classList.add('start');
        ul.innerHTML = "";	
            
       
        for (let i = 0; i < keys.length; i++) {

            keys[i].classList.remove('chosen', 'wrong');
            keys[i].disabled = false;
        }
          
        for (let i = 0; i < hearts.length; i++) {

            if (hearts[i].classList != 'tries')	{

                hearts[i].classList.add('tries');
                hearts[i].firstChild.src = 'images/liveHeart.png';
            }	   
        }
    }
        
}
  
  
  