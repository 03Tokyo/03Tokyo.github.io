const images = [
    { name: `Concrete Rose`, desc: `"Concrete Rose" by Angie Thomas` },
    { name: `scythe`, desc: `"Scythe" by Neal Shusterman` },
];

const path = `assets/img/`;

let imgStr = ``;

images.forEach( ( image) => {
  //console.log(image);

  imgStr += `<img src="${ path }${ image.name }thumb.jpg"
                  class= "thumb"
                  id= "${ image.name }"
                  alt= "${ image.desc }"
                  title= "${ image.desc }">`;
});

document.querySelector( `#strip-div` ).innerHTML = imgStr;
  
document.querySelectorAll( `.thumb`).forEach( function(thumb) {
  thumb.addEventListener( `click`, function() {
    // console.log( `in event listener`, this);
    // console.dir( this );

    showImage( this );

  });
});

function showImage( thumb ) {
  const bigPic = document.querySelector( `#big-pic` );

  bigPic.src = `${ path }${ thumb.id }.jpg`;
  bigPic.alt = thumb.title;
  bigPic.title = thumb.title;

  document.querySelector( `#caption`).innerHTML = thumb.title;
}

//preload all fullsize images
images.forEach( ( image) => {
  const newImg = new Image();
  newImg.src = `${ path }${ image.name }.jpg`;
  
});





