// collage maker

// place images on screen
const imageContainer = document.getElementById('firstImage');

const buttonOne = document.getElementById('buttonOne');

const inputOne = document.getElementById('inputFieldOne');

let loremFlickr = 'https://loremflickr.com/640/480/';

let loremWord = 'paris';

let loremRando = '?random=1';

// get the word from the input field

function getTheLoremImage() {
  let theInputValue = inputOne.value;
  let newImageURL = `${loremFlickr}${theInputValue}${loremRando}`;
  return newImageURL;
}

function updateImgURL() {
  let newURL = getTheLoremImage();
  imageContainer.src = newURL;
}

buttonOne.addEventListener('click', updateImgURL);
