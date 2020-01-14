//
// collage maker
//

import { makeCircles } from './modules/makeCircles.js';

import { basicXHR } from './modules/basicXHR.js';

import { getRandomInt, removeShapes, setNewBG } from './modules/utils.js';

import { makeTriangles } from './modules/makeShapes.js';

// query images and shapes  on screen
export const imageContainer = document.getElementById('firstImage');

export const textImageContainer = document.getElementById('textImage');

export const triangleContainer = document.getElementById('simpleTriangle');

// these are the image and svg text containers:
const containers = [imageContainer, textImageContainer];

export const circles = document.querySelectorAll('circle');

export const primaryContainer = document.querySelector('.primary-container');

export const x = primaryContainer.clientWidth;

export const y = primaryContainer.clientHeight;

export const r = (x + y) / 10;

// this is the generated circle container:
// TODO: this is too generic, give it a more specific name...
//

export const container = document.getElementById('coverCircles');

// this is the clip path with the circles:

export const clipPaths = document.getElementById('clippingPath');

//
// The button by which we get new words:
//

const buttonOne = document.getElementById('buttonOne');

//
// load new images from and redraw the circles.
//

function newImages() {
  setNewBG();
  removeShapes(container);
  removeShapes(clipPaths);
  removeShapes(triangleContainer);
  makeTriangles(getRandomInt(15), triangleContainer);
  makeCircles(getRandomInt(16), clipPaths);
  makeCircles(getRandomInt(8), container);
  basicXHR(containers);
}

//
// run dynamic circles once the DOM is loaded;
//

document.addEventListener(
  'DOMContentLoaded',
  setNewBG(),
  removeShapes(clipPaths),
  makeCircles(getRandomInt(16), clipPaths),
  makeCircles(getRandomInt(8), container),
  makeTriangles(getRandomInt(15), triangleContainer),
);

//
// User input
//

buttonOne.addEventListener('click', newImages);
