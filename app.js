const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const ul = document.querySelector('#phrase ul');
const startButton = document.querySelector('.btn__reset'); // Start game button
const scoreBoard = document.querySelector('#scoreboard ol');
let missed = 0; // Hearts of the player

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


function checkLetter(key) {
    const li = document.getElementsByClassName('letter');
    for(let i = 0; i < li.length; i += 1) {
        if(li[i].textContent === key) {
            li[i].className += ' show';
            return li[i];
        } else {
            //return null;
        }
    }
    
}

qwerty.addEventListener('click', (e) => {
    const letter = e.target;
    checkLetter(letter);
});


// For testing
addPhraseToDisplay(phrases);
