//
// collage maker
//

import dynamicCircles from './modules/dynamicCircles.js';

import { basicXHR } from './modules/basicXHR.js';

// place images on screen

export const imageContainer = document.getElementById('firstImage');

export const textImageContainer = document.getElementById('textImage');

const containers = [imageContainer, textImageContainer];

const buttonOne = document.getElementById('buttonOne');

// SVG elements
const bigWordSVG = document.getElementById('textClipper');

export const bigWordWord = document.getElementById('firstWord');

// Do the things:
// run dynamic circles once the DOM is loaded;
document.addEventListener('DOMContentLoaded', dynamicCircles());

// load new images from and redraw the circles.
function newImages() {
  dynamicCircles();
  basicXHR(containers);
}

buttonOne.addEventListener('click', newImages);
