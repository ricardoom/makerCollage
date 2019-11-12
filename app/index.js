// collage maker

// place images on screen
const imageContainer = document.getElementById('firstImage');

const buttonOne = document.getElementById('buttonOne');

const inputOne = document.getElementById('inputFieldOne');

const message = {
  loading: '<span>Loading Cabron...</span>',
  errors: '<span>Error Pendejo...</span>',
  loaded: '<span>Your new image</span',
};

const outputContainer = document.getElementById('output');

let dc = 'http://api.repo.nypl.org/api/v1/items/search?q=';

let dcQuery = 'mountain';

let dcPublicDomain = '&publicDomainOnly=true';

let loremFlickr = 'https://loremflickr.com/640/480/';

let wikiAPI = '';

let loremWord = 'paris';

let loremRando = '?random=1';

// get the word from the input field

function getTheLoremImage() {
  let theInputValue = inputOne.value;
  debugger
  let newImageURL = `${loremFlickr}${theInputValue}${loremRando}`;
  return newImageURL;
}

function getTheURL(firstPart, query, secondPart) {
  let theInputValue = inputOne.value;
  let theURL = `${firstPart}${query}${secondPart}`;
  return theURL;
}

function updateImgURL() {
  let newURL = getTheLoremImage();
  console.log('updateIMG url is being fired');
  if ((imageContainer.src = '')) {
    imageContainer.src = newURL;
  }
}

// request images from  lorem flickr
function useXHR() {
  let xhr = new XMLHttpRequest();
  console.log(xhr);

  xhr.open('GET', getTheLoremImage());
  //xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

  xhr.onprogress = () => {
    console.log('on progress ready state:', xhr.readyState);
    outputContainer.innerHTML = `${message.loading}`;
    outputContainer.setAttribute('class', 'loading');
  };

  // xhr.onreadystatechange = () => {
  //   if (xhr.readyState === 4 && xhr.status === 200) {
  //     outputContainer.setAttribute('class', 'loaded');
  //   }
  // };

  xhr.onload = () => {
    console.log('Onload Ready State is:', xhr.readyState);
    imageContainer.src = xhr.responseURL;
    outputContainer.innerHTML = `${message.loaded}`;
    outputContainer.setAttribute('class', 'loaded');
  };

  xhr.onerror = () => {
    console.log('there was an error making the request: ');
    outputContainer.innerHTML = `${message.errors}`;
  };

  xhr.send();

  console.log('button is being pressed');
}

buttonOne.addEventListener('click', useXHR);
