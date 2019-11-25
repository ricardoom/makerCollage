import dynamicCircles from './modules/dynamicCircles.js';
// collage maker

// place images on screen
// export const primaryContainer = document.querySelector('.primary-container');

const imageContainer = document.getElementById('firstImage');

const textImageContainer = document.getElementById('textImage');

const buttonOne = document.getElementById('buttonOne');

const inputOne = document.getElementById('inputFieldOne');

// SVG elements
const bigWordSVG = document.getElementById('textClipper');

const bigWordWord = document.getElementById('firstWord');

// export const circles = document.querySelectorAll('circle');

// XHR Messages
const message = {
  loading: '<span>Loading Cabron...</span>',
  errors: '<span>Error Pendejo...</span>',
  loaded: '<span>Your new image</span'
};

const outputContainer = document.getElementById('output');

const loadingSpinner = 'assets/Spinner-Loading.gif';

//
// Dynamic SVG manipulations:
//
// move the circles around dynamically, on refresh / or on button press

//
// Use only images from lorem flickr
//
let loremFlickr = 'https://loremflickr.com/640/480/';

let loremWord = 'paris';

let loremRando = '?random=1';

// get the word from the input field
function getTheLoremImage() {
  let theInputValue = inputOne.value;
  const newImageURL = `${loremFlickr}${theInputValue}${loremRando}`;
  return newImageURL;
}

// function getTheURL(firstPart, query, secondPart) {
//   let theInputValue = inputOne.value;
//   let theURL = `${firstPart}${query}${secondPart}`;
//   return theURL;
// }

// request images from  lorem flickr
function useXHR() {
  console.log('the button was pressed');
  const xhr = new XMLHttpRequest();

  console.log(xhr);

  xhr.open('GET', getTheLoremImage());

  xhr.onprogress = () => {
    console.log('On Progress ready state:', xhr.readyState);
    outputContainer.innerHTML = `${message.loading}`;
    imageContainer.src = loadingSpinner;
    textImageContainer.src = loadingSpinner;
    outputContainer.setAttribute('class', 'loading');
  };

  xhr.onload = () => {
    console.log(
      'Onload Ready State is:',
      xhr.readyState,
      'On Load xhr responseURL is: ',
      xhr.responseURL
    );

    imageContainer.src = xhr.responseURL;
    textImageContainer.src = xhr.responseURL;
    outputContainer.innerHTML = `${message.loaded}`;
    outputContainer.setAttribute('class', 'loaded');
    bigWordWord.innerHTML = inputOne.value;
    dynamicCircles();
  };

  xhr.onerror = () => {
    console.log('there was an error making the request: ');
    outputContainer.innerHTML = `${message.errors}`;
  };

  xhr.send();
}

// Do the things:
document.addEventListener('DOMContentLoaded', event => {
  console.log('DOM fully loaded and parsed');
  dynamicCircles();
});

buttonOne.addEventListener('click', useXHR);
