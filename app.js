const keyBoard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const ul = document.querySelector('#phrase ul');
const startButton = document.querySelector('.btn__reset'); // Start game button
const scoreBoard = document.querySelector('#scoreboard ol');
let missed = 0; // Hearts of the player
let correct = -2; // Correct letters;
let match = ''; // Used to check if button pressed matches text content of li

const phrases = [
    "foaming at the mouth",
    "back to the drawing board",
    "man of few words",
    "knock your socks off",
    "rain on your parade",
];
// Remove overplay after clicking start
startButton.addEventListener('click', (e) => {
    overlay.style.display = 'none';
});
// Choose one of the phrases from the phrases array
function getRandomPhraseAsArray(arr) {
    function getRandomArray (arr) {
        const num = Math.floor((Math.random() * phrases.length));
        const array = arr[num];
        return array;
    }
    const string = getRandomArray(arr).split("");
    return string;
}
// Convert the chosen phrase into its own array of strings
function addPhraseToDisplay(arr) {
    const phraseArray = getRandomPhraseAsArray(arr);
    for(let i = 0; i < phraseArray.length; i += 1) {
        const li = document.createElement ('li');
        if (phraseArray[i] === ' ') {
            li.innerHTML = '';
            li.className = 'space';
            ul.appendChild(li);
        } else {
            li.textContent = phraseArray[i];
            li.className = 'letter';
            ul.appendChild(li)
        }
    }

}
// Loops through li's in the Ul to check if their text content matches the button pressed
function checkLetter(button) {
    let li = document.getElementsByClassName('letter');
    for(let i = 0; i < li.length; i += 1) {
        if (li[i].textContent === button.textContent) {
            li[i].className += ' show';
            match = li[i];
            correct += 1;
            // return li[i].textContent;
        } else {
            li.className = '';
        }
        
    }
}
// Win checker 
function checkWin() {
    let li = document.getElementsByClassName('letter');
    let liShow = document.getElementsByClassName('show');
    if (liShow.length === li.length) {        
        return true;
    } else {
        return null;
    }
}
// Lose checker 
function checkLose() {
    li = scoreBoard.children;
    if (missed === 5){        
        return true;
    } else {
        return null;
    }
}
// Event listenr for QWERTY
qwerty.addEventListener('click', (e) => {
  if(e.target.tagName === 'BUTTON') {
    const letterPressed = e.target;
    const letterChecked = checkLetter(letterPressed)
    if (match.textContent === letterPressed.textContent) {
        letterPressed.className = 'match';
    } else {
        letterPressed.className = 'chosen';
        const li = document.querySelector('.tries')
        const img = li.firstElementChild
        img.src = "images/lostHeart.png";
        li.className = 'lost';
        missed += 1;
    }
  }   
  const winCheck = checkWin();
  const loseCheck = checkLose();
  // Win checker
  if (winCheck === true) {
    const title = document.querySelector('.title')
    const button = document.querySelector('.btn__reset')
    title.textContent = 'You have Won!'
    button.textContent = 'play again?'
    overlay.style.display = '';
    overlay.className += ' win'
    startButton.addEventListener('click', (e) => {
        location.reload();
    });
    // Lose checker
  } else if (loseCheck === true) {
    const title = document.querySelector('.title')
    const button = document.querySelector('.btn__reset')
    title.textContent = 'You have lost!'
    button.textContent = 'Try again?'
    overlay.className += ' lose'
    startButton.className += ' btn_lose'
    overlay.style.display = '';
    startButton.addEventListener('click', (e) => {
        location.reload();
    });
  }
});


// For testing
addPhraseToDisplay(phrases);
