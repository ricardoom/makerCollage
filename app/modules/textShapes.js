//
// Fun with the text shapes.
//

// import { getRandomInt } from './utils.js';

const bigWordWord = document.getElementById('firstWord');

const transformWord = (w, r, x, y, z, fs) => {
  w.style.setProperty('--rotate', `${r}deg`);
  w.style.setProperty('--translate-x', `${x}px`);
  w.style.setProperty('--translate-y', `${y}px`);
  w.style.setProperty('--translate-z', `${z}px`);
  w.style.setProperty('--font-size', `${fs}rem`);
  console.log(w, r, x, y, z);
}

// firstWord.style.setProperty('--rotate', '0');
//
// This function moves the original word around
function shapeTheText() {
  console.log('some shapes with text');
  // get the the existing text object's/shape's position
}

function createNewWord(input) {
  console.log('a new function that creates a new word on screen');
  // pull in the word from user input
  // create the container
  // create the svg <text> object
  // give it size
  // give it position
  // give it color
}

export { shapeTheText, createNewWord, transformWord, bigWordWord };
