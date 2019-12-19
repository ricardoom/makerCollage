//
// collage maker
//

// import dynamicCircles from './modules/dynamicCircles.js';

import { makeCircles, removeCircles } from './modules/makeCircles.js';

import { basicXHR } from './modules/basicXHR.js';

import { getRandomInt } from './modules/getRandomInt.js';

export const primaryContainer = document.querySelector('.primary-container');

// place images on screen

export const imageContainer = document.getElementById('firstImage');

export const textImageContainer = document.getElementById('textImage');

// these are the image and svg text containers:
const containers = [imageContainer, textImageContainer];

const buttonOne = document.getElementById('buttonOne');

// const bigWordSVG = document.getElementById('textClipper');



export const circles = document.querySelectorAll('circle');

export const x = primaryContainer.clientWidth;

export const y = primaryContainer.clientHeight;

export const r = 150;

export const bigWordWord = document.getElementById('firstWord');

// this is the generated circle container:

export const container = document.getElementById('coverCircles');

// this is the clip path with the circles:

export const clipPaths = document.getElementById('clippingPath');

// load new images from and redraw the circles.
function newImages() {
  removeCircles(container);
  // makeCircles(getRandomInt(25), clipPaths);
  makeCircles(getRandomInt(25), container);
  basicXHR(containers);
}

// Do the things:
// run dynamic circles once the DOM is loaded;
document.addEventListener(
  'DOMContentLoaded',
  makeCircles(getRandomInt(15), container),
);

buttonOne.addEventListener('click', newImages);
console.log(clipPaths);
