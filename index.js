// collage maker w/ digital collections from nypl

// call digital and get an images
// for now, lets only ask for 3
// needs input fields for the three images

// DC Authentication Token

//

// place images on screen
const imageContainer = document.getElementById('firstImage');

const buttonOne = document.getElementById('buttonOne');

const imageUno = document.getElementById('firstImage');

const inputOne = document.getElementById('inputFieldOne');

// let loremFlickrJSON = 'https://loremflickr.com/json/640/480/';

let loremFlickr = 'https://loremflickr.com/640/480/';

let loremWord = 'paris';

let loremRando = '?random=1';

let jsonPlaceholder = 'https://jsonplaceholder.typicode.com/users';

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

// SANDBOX

// const dcToken = 'j6od0lgm6qprob3s';
// let dcURL =
//   'http://api.repo.nypl.org/api/v1/items/search?q=cats&publicDomainOnly=true';

// function learnJson() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {
//       let output = '<h2>Users</h2>';
//       data.forEach(function(user) {
//         output += `
//           <ul>
//             <li>${user.name}</li>
//             <li>${user.company.bs}</li>
//           </ul>
//         `;
//       });
//       document.getElementById('output').innerHTML = output;
//     });
// }

// learnJson();

// .then(function(myJSON) {
//   console.log(JSON.stringify(myJSON));
// });

// getDCImage(dcURL);

// use an svg as the mask
// get svgs from set of premade svgs

//
