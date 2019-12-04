import { getTheLoremImage, inputOne } from './loremImage.js';

import { bigWordWord } from './../index.js';

// const loremImage = getTheLoremImage();

const outputContainer = document.getElementById('output');

const loadingSpinner = 'assets/Spinner-Loading.gif';

// XHR Messages
const xhrMessages = {
  loading: '<span>Loading Cabron...</span>',
  errors: '<span>Error Pendejo...</span>',
  loaded: '<span>Your new image</span'
};

export function basicXHR(containersObject) {
  // debugger;
  console.log('calling basic XHR function when the button is pressed');

  containersObject.forEach(container => {
    const xhr = new XMLHttpRequest();

    // console.log(xhr);

    xhr.open('GET', getTheLoremImage(), true); // here we want to pass getLoremImage as a call back argument, and set async to true

    xhr.onprogress = () => {
      console.log('On Progress ready state:', xhr.readyState);
      outputContainer.innerHTML = `${xhrMessages.loading}`;
      container.src = loadingSpinner;
      outputContainer.setAttribute('class', 'loading');
    };

    xhr.onload = () => {
      console.log(
        'Onload Ready State is:',
        xhr.readyState,
        'On Load xhr responseURL is: ',
        xhr.responseURL
      );

      bigWordWord.innerHTML = inputOne.value;
      container.src = xhr.responseURL;
      outputContainer.innerHTML = `${xhrMessages.loaded}`;
    };

    xhr.onerror = () => {
      console.log('there was an error making the request: ');
    };

    xhr.send();
  });
}
