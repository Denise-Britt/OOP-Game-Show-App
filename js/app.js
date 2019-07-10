/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 
// Begin a new Game when `Start Button` is selected. 
let game;	
const reset = document.querySelector('#btn__reset');
const keyboard = document.querySelector('#qwerty');

reset.addEventListener('click', () => {
	game = new Game();
	game.resetGame();
	game.startGame();
}); 


// Listen for letters to be selected on the keyboard and call `handleInteraction` method
keyboard.addEventListener('click', (e) => {

	const chosenKey = event.target;

	if (chosenKey.classList.contains('key')) {
		
       game.handleInteraction(chosenKey);
    };   
});
