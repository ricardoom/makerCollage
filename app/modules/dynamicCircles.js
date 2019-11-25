import getRandomInt from './getRandomInt.js';

export default function dynamicCircles() {
  const primaryContainer = document.querySelector('.primary-container');
  const circles = document.querySelectorAll('circle');

  console.log('dynamicCircles getting called');

  const x = primaryContainer.offsetWidth;

  const y = primaryContainer.offsetHeight;

  const r = 150;

  circles.forEach(circ => circ.setAttribute('cx', getRandomInt(x)));
  circles.forEach(circ => circ.setAttribute('cy', getRandomInt(y)));
  circles.forEach(circ => circ.setAttribute('r', getRandomInt(r)));
}
