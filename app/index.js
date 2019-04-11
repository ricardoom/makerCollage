// collage maker

// place images on screen
const imageContainer = document.getElementById('firstImage');

const buttonOne = document.getElementById('buttonOne');

const inputOne = document.getElementById('inputFieldOne');

const message = {
  loading: '<span>Loading Cabron...</span>',
  errors: '<span>Error Pendejo...</span>',
};

let loremFlickr = 'https://loremflickr.com/640/480/';

let wikiAPI = '';

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
  console.log('updateIMG url is being fired');
  imageContainer.src = newURL;
}

//
function useXHR() {
  let xhr = new XMLHttpRequest();
  // console.log(xhr);

  xhr.open('GET', getTheLoremImage());
  xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

  xhr.onprogress = () => {
    console.log('ready state:', xhr.readyState);
    imageContainer.innerHTML = `${message.loading}`;
  };

  xhr.onload = () => {
    console.log('ready state:', xhr.readyState);
    if (this.status == 200) {
      imageContainer.src = this.response;
    }
  };
  xhr.onerror = function() {
    console.log('there was an error making the request: ');
    imageContainer.innerHTML = `${message.errors}`;
  };
  xhr.send();
  // if (request.status === 200) {
  //   console.log(request.responseText);
  // }
  console.log('button is being pressed');
}

buttonOne.addEventListener('click', useXHR);
