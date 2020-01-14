//
// Utilites used pretty frequently:
//
//
// Imports:
//

import { x, y } from './../index.js';

// set a given viewBox's values based on the client width and height
//
const setViewBox = function(container) {
  container.setAttribute('viewBox', `0 0 ${x} ${y}`);
  container.setAttribute('height', `${y}`);
  container.setAttribute('width', `${x}`);
};

//
// Random numbers
//

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandom(max, min) {
  return Math.random() * (max - min) + min;
}

//
// Remove any SVG Shape from the parent container
//

function removeShapes(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

//
// Do some fun things w/ svg filter effects
//

function effectFilter() {
  console.log('Doing things w/ filter effects');
  // create an object that has all the settings
  //
}

//
// Change the container's background color
// * leans heavily on this page from MDN: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty
//
// TODO: make this more generic, so it can change the bg  color of any container...
//
const stylesheet = document.styleSheets[0];

let bgStyleRule;

for (let i = 0; i < stylesheet.cssRules.length; i++) {
  if (stylesheet.cssRules[i].selectorText === '.primary-container') {
    bgStyleRule = stylesheet.cssRules[i];
    console.log(bgStyleRule);
  }
}

function randomBGColor() {
  return `hsla(${getRandomInt(360)},${getRandomInt(100)}%, ${getRandomInt(100)}%, ${getRandom(1, 0.25)})`;
}

function setNewBG() {
  const newBGColor = randomBGColor();
  bgStyleRule.style.setProperty('background-color', newBGColor);
  console.log('new bg being called...', newBGColor);
}

export { getRandomInt, getRandom, setViewBox, removeShapes, effectFilter, setNewBG };
