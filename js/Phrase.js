/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

    constructor (phrase) {

        this.phrase = phrase.toLowerCase();
    }

    
    //Displays phrase on game board
    addPhraseToDisplay() {

        const phraseList = document.querySelector ("#phrase ul");
        const splitPhrase = this.phrase.split("");
        phraseList.innerHTML = " ";
                
        splitPhrase.forEach( letter => {
            
            let li = document.createElement('li');
            let letter_tc = document.createTextNode(letter);

            li.appendChild(letter_tc);
            
            if (letter === " ") {  
                
                li.classList.add('space');   
                phraseList.appendChild(li); 

            } else {

                li.classList.add("hide", "letter", `${letter}`);
            }

             phraseList.appendChild(li);

        });
    }

    // Checks if passed letter is in phrase
    checkLetter(letter) {

        if (this.phrase.includes(letter)) {

            return true;

        } else {

            return false;
        }

    }

    // Displays passed letter on screen after match is found
    showMatchedLetter(letter) {

        const letter_boxes = document.querySelectorAll(`.${letter}`);

        if (this.checkLetter(letter)) {
            for (let i = 0; i < letter_boxes.length; i++) {
                
                letter_boxes[i].classList.add('show');
                letter_boxes[i].classList.remove('hide');
            }
        }
    }

}
