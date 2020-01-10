// make shapes or make triangles
import { getRandomInt, getRandom } from './getRandomInt.js';

// import { triangleContainer } from '../index.js';

import { x, y, r } from './../index.js';
//

const triangle = document.getElementById('simpleTriangle');

const polygon = triangle.querySelector('polygon');

const polygonPoints = polygon.getAttributeNames();

const setViewBox = function(container) {
  container.setAttribute('viewBox', `0 0 ${x} ${y}`);
  container.setAttribute('height', `${y}`);
  container.setAttribute('width', `${x}`);
};
// make a given number of triangles:
const makeTriangles = (numberOfTriangles, container) => {
  setViewBox(triangle);
  for (let i = 0; i < numberOfTriangles; i++) {
    const newTriangle = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'polygon',
    );
    // temp array of points
    const pointsArray = [
      getRandomInt(y),
      getRandomInt(x),
      getRandomInt(y),
      getRandomInt(x / y),
      getRandomInt(r),
      getRandomInt(y / x),
      getRandomInt(x / 1.3),
      getRandomInt(y + r * 0.2),
    ];
    newTriangle.setAttribute('points', pointsArray);
    newTriangle.style.fill = `hsla(${getRandomInt(360)},${getRandomInt(
      100,
    )}%, ${getRandomInt(100)}%, ${getRandom(1, 0.25)})`;
    container.appendChild(newTriangle);
  }
};

//  get the points attribute from a given polygon and then fill it w/ a random set of points...
const theNewArray = () => {
  for (const point of polygonPoints) {
    const value = polygon.getAttribute(point);
    const theArray = value.split(' ').map(item => {
      return parseInt(item);
    });
    return theArray;
  }
};

export { makeTriangles, theNewArray, setViewBox };
