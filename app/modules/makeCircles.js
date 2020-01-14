import { getRandomInt, getRandom, setViewBox } from './utils.js';
import { x, y, r } from './../index.js';

const clipPathContainer = document.getElementById('clippingPath');
const circleContainer = document.getElementById('circleContainer');

const makeCircles = function(numberOfCircles, container) {
  setViewBox(container);
  for (let i = 0; i < numberOfCircles; i++) {
    const newCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    newCircle.setAttribute('cx', getRandomInt(x));
    newCircle.setAttribute('cy', getRandomInt(y));
    newCircle.setAttribute('r', getRandomInt(r));
    newCircle.style.fill = `hsla(${getRandomInt(360)},${getRandomInt(100)}%, ${getRandomInt(100)}%, ${getRandom(1, 0.25)})`;
    container.appendChild(newCircle);
  }
};

export { clipPathContainer, makeCircles, circleContainer };
