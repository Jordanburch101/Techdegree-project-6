const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const ul = document.querySelector('#phrase ul');
const startButton = document.querySelector('.btn__reset'); // Start game button
let missed = 0; // Hearts of the player

const phrases = [
    "foaming at the mouth",
    "back to the drawing board",
    "man of few words",
    "knock your socks off",
    "rain on your parade",
];

startButton.addEventListener('click', (e) => {
    overlay.style.display = 'none';
});

function getRandomPhraseAsArray(arr) {
    function getRandomArray (arr) {
        const num = Math.floor((Math.random() * phrases.length));
        const array = arr[num];
        return array;
    }
    const string = getRandomArray(arr).split("");
    return string;
}

function addPhraseToDisplay(arr) {
    const phraseArray = getRandomPhraseAsArray(arr);
    for(let i = 0; i < arr.length; i += 1) {
        const li = document.createElement ('li');
        if (phraseArray.textContent != ' ') {
            li.textContent = `${i}`;
            li.className = 'letter';
            ul.appendChild(li);
        } else {

        }
    }
}
addPhraseToDisplay(phrases);
console.log(getRandomPhraseAsArray(phrases));