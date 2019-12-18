import getRandomInt from './getRandomInt.js';
import { x, y, r } from './../index.js';

export default function dynamicCircles() {
  console.log('dynamicCircles getting called');

  // const primaryContainer = document.querySelector('.primary-container');

  const circles = document.querySelectorAll('circle');

  // const x = primaryContainer.offsetWidth;

  // const y = primaryContainer.offsetHeight;

  // const r = 150;

  circles.forEach(circ => circ.setAttribute('cx', getRandomInt(x)));
  circles.forEach(circ => circ.setAttribute('cy', getRandomInt(y)));
  circles.forEach(circ => circ.setAttribute('r', getRandomInt(r)));
}
