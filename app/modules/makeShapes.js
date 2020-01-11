//
// Make shapes or make triangles
//

//
// Import functions and variables:
//

import { getRandomInt, getRandom, setViewBox } from './utils.js';

import { x, y, r } from './../index.js';

//
// DOM elements
//

const triangle = document.getElementById('simpleTriangle');

const polygon = triangle.querySelector('polygon');

const polygonPoints = polygon.getAttributeNames();

//
// Make a given number of triangles:
//

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
    )}%, ${getRandomInt(100)}%, ${getRandom(0.8, 0.05)})`;
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

export { makeTriangles, theNewArray };
