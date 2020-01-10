//
// collage maker
//

// import dynamicCircles from './modules/dynamicCircles.js';

import {
  makeCircles,
  removeCircles,
  removeCircles as removeTriangles,
} from './modules/makeCircles.js';

import { basicXHR } from './modules/basicXHR.js';

import { getRandomInt } from './modules/getRandomInt.js';

import { makeTriangles } from './modules/makeShapes.js';

export const primaryContainer = document.querySelector('.primary-container');

// query images and shapes  on screen

export const imageContainer = document.getElementById('firstImage');

export const textImageContainer = document.getElementById('textImage');

export const bigWordWord = document.getElementById('firstWord');

export const triangleContainer = document.getElementById('simpleTriangle');

// these are the image and svg text containers:
const containers = [imageContainer, textImageContainer];

const buttonOne = document.getElementById('buttonOne');

// const bigWordSVG = document.getElementById('textClipper');

export const circles = document.querySelectorAll('circle');

export const x = primaryContainer.clientWidth;

export const y = primaryContainer.clientHeight;

export const r = 150;

// this is the generated circle container:
// TODO: this is too generic, give it a more specific name...
export const container = document.getElementById('coverCircles');

// this is the clip path with the circles:

export const clipPaths = document.getElementById('clippingPath');

// load new images from and redraw the circles.
function newImages() {
  removeCircles(container);
  removeCircles(clipPaths);
  removeTriangles(triangleContainer);
  makeTriangles(getRandomInt(5), triangleContainer);
  makeCircles(getRandomInt(8), clipPaths);
  makeCircles(getRandomInt(8), container);
  basicXHR(containers);
}

// Do the things:
// run dynamic circles once the DOM is loaded;
document.addEventListener(
  'DOMContentLoaded',
  makeCircles(getRandomInt(15), container),
  makeTriangles(getRandomInt(5), triangleContainer),
);

buttonOne.addEventListener('click', newImages);
