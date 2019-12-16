import getRandomInt from './getRandomInt.js';
import { x, y, r } from './../index.js';

const clipPathContainer = document.getElementById('clippingPath');
const testCont = document.getElementById('circleContainer');

const removeCircles = function(container) {
  container.childNodes.forEach(node => node.remove(node));
};

const makeCircles = function(numberOfCircles, container) {
  for (let i = 0; i < numberOfCircles; i++) {
    const newCircle = document.createElement('circle');
    newCircle.setAttribute('cx', getRandomInt(x));
    newCircle.setAttribute('cy', getRandomInt(y));
    newCircle.setAttribute('r', getRandomInt(r));
    newCircle.style.color = `hsl(${getRandomInt(360)},${getRandomInt(100)}%, ${getRandomInt(100)}%`;
    container.appendChild(newCircle);
  }
};

export { clipPathContainer, makeCircles, removeCircles, testCont };
