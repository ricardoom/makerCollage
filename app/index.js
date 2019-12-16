//
// collage maker
//

import dynamicCircles from './modules/dynamicCircles.js';

import { makeCircles, removeCircles, clipPathContainer } from './modules/makeCircles.js';

import { basicXHR } from './modules/basicXHR.js';
import getRandomInt from './modules/getRandomInt.js';

// place images on screen

export const imageContainer = document.getElementById('firstImage');

export const textImageContainer = document.getElementById('textImage');

const containers = [imageContainer, textImageContainer];

const buttonOne = document.getElementById('buttonOne');

// SVG elements
// const bigWordSVG = document.getElementById('textClipper');

export const primaryContainer = document.querySelector('.primary-container');

export const circles = document.querySelectorAll('circle');

export const x = primaryContainer.offsetWidth;

export const y = primaryContainer.offsetHeight;

export const r = 150;

export const bigWordWord = document.getElementById('firstWord');

const container = document.getElementById('coverCircles');

// load new images from and redraw the circles.
function newImages() {
  // dynamicCircles();
  removeCircles(container);
  makeCircles(getRandomInt(8), container);
  basicXHR(containers);
}

// Do the things:
// run dynamic circles once the DOM is loaded;
document.addEventListener('DOMContentLoaded', makeCircles(getRandomInt(8), container));

buttonOne.addEventListener('click', newImages);
