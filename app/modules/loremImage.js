//
// Use only images from lorem flickr
//
const inputOne = document.getElementById('inputFieldOne');

const loremFlickr = 'https://loremflickr.com/640/480/';

const loremRando = '?random=1';

// get the word from the input field
function getTheLoremImage() {
  const theInputValue = inputOne.value;
  const newImageURL = `${loremFlickr}${theInputValue}${loremRando}`;
  return newImageURL;
}

export { getTheLoremImage, inputOne };
