// collage maker w/ digital collections from nypl

// call digital and get an images
// for now, lets only ask for 3
// needs input fields for the three images

// DC Authentication Token

//  j6od0lgm6qprob3s

// place images on screen
let imageUno = document.getElementById('firstImage');
function getDCImage(api) {
  function reqListener() {
    console.log(this.responseText);
  }

  let dc = new XMLHttpRequest();
  dc.addEventListener('load', reqListener);
  dc.open('GET', api, true);
  dc.setRequestHeader('Access-Control-Allow-Origin', '*');
  dc.setRequestHeader('Authorization', 'Token');
  dc.send();
}
let dcURL =
  'http://api.repo.nypl.org/api/v1/items/search?q=cats&publicDomainOnly=true';
getDCImage(dcURL);
// use an svg as the mask
// get svgs from set of premade svgs

//
