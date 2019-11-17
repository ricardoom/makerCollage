// collage maker

// place images on screen
const imageContainer = document.getElementById("firstImage");

const buttonOne = document.getElementById("buttonOne");

const inputOne = document.getElementById("inputFieldOne");

// SVG elements
const bigWordSVG = document.getElementById("textClipper");
let bigWordWord = document.getElementById("firstWord");

// XHR Messages
const message = {
  loading: "<span>Loading Cabron...</span>",
  errors: "<span>Error Pendejo...</span>",
  loaded: "<span>Your new image</span"
};

const outputContainer = document.getElementById("output");

const loadingSpinner = "assets/Spinner-Loading.gif";

// Use only images from lorem flickr
let loremFlickr = "https://loremflickr.com/640/480/";

let loremWord = "paris";

let loremRando = "?random=1";

// get the word from the input field
function getTheLoremImage() {
  let theInputValue = inputOne.value;
  let newImageURL = `${loremFlickr}${theInputValue}${loremRando}`;
  return newImageURL;
}

// function getTheURL(firstPart, query, secondPart) {
//   let theInputValue = inputOne.value;
//   let theURL = `${firstPart}${query}${secondPart}`;
//   return theURL;
// }

// change the big word based on input
function changeWord() {}

// request images from  lorem flickr
function useXHR() {
  console.log("the button was pressed");
  let xhr = new XMLHttpRequest();

  console.log(xhr);

  xhr.open("GET", getTheLoremImage());
  //xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

  xhr.onprogress = () => {
    console.log("On Progress ready state:", xhr.readyState);
    outputContainer.innerHTML = `${message.loading}`;
    imageContainer.src = loadingSpinner;
    outputContainer.setAttribute("class", "loading");
  };

  // xhr.onreadystatechange = () => {
  //   if (xhr.readyState === 4 && xhr.status === 200) {
  //     outputContainer.setAttribute('class', 'loaded');
  //   }
  // };

  xhr.onload = () => {
    console.log(
      "Onload Ready State is:",
      xhr.readyState,
      "On Load xhr responseURL is: ",
      xhr.responseURL
    );
    imageContainer.src = xhr.responseURL;
    outputContainer.innerHTML = `${message.loaded}`;
    outputContainer.setAttribute("class", "loaded");
    bigWordWord.innerHTML = inputOne.value;
  };

  xhr.onerror = () => {
    console.log("there was an error making the request: ");
    outputContainer.innerHTML = `${message.errors}`;
  };

  xhr.send();
}

buttonOne.addEventListener("click", useXHR);
