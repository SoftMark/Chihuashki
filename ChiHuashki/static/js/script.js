let butRise = document.getElementById("topChi"),
    arrowPrevious = document.getElementById("previous-img"),
    arrowNext = document.getElementById("next-img"),
    contents = document.getElementsByClassName("content"),
    imagesDog = document.querySelectorAll(".images"),
    categoryContent = document.querySelectorAll(".content"),
    count = 0,
    countGallery = 0,
    width;
    intervalSlide = setInterval(autoSlide, 5000);

// Scroll slow
// document.querySelectorAll('a[href^="#"').forEach(link => {
//     link.addEventListener("click", function (e) {
//         e.preventDefault();
//
//         let href = this.getAttribute("href").substring(1);
//         const scrollTarget = document.getElementById(href);
//         const topOffset = document.querySelector("#menu-links").offsetHeight;
//         const elementPosition = scrollTarget.getBoundingClientRect().top;
//         const offsetPosition = elementPosition - topOffset;
//
//         window.scrollBy({
//             top: offsetPosition,
//             behavior: "smooth"
//         });
//     });
// });

// button see all dogs
categoryContent.forEach(categoryDog => {
    let conteinerDogs = categoryDog.querySelector(".list-dogs"),
        listDogs = categoryDog.querySelectorAll(".list-dog"),
        openBut = categoryDog.querySelector(".open-dogs"),
        closeBut = categoryDog.querySelector(".close-dogs");

    if (listDogs.length > 3){
        openBut.style.display = "block";
    }

    openBut.addEventListener("click", function (e) {
        let heightConteiner = conteinerDogs.scrollHeight
        this.removeAttribute("style");
        closeBut.style.display = "block";
        conteinerDogs.style.height = heightConteiner + "px";
    })

    closeBut.addEventListener("click", function (e) {
        this.removeAttribute("style");
        openBut.style.display = "block";
        conteinerDogs.removeAttribute("style");
    })
})

// Slide images dog
imagesDog.forEach(img => {
    let count = 0;
    img.addEventListener("click", function (e) {
        e.preventDefault();

        if (e.target.classList[0] == "arrow-dog") {
            let images = img.querySelector(".img-line"),
                image = images.querySelectorAll("img"),
                video = images.querySelectorAll("video"),
                videoCol = video.length,
                imgCol = image.length,
                imgWidth = 100;

            if (e.target.classList[1] == "previous-img") {
                count--;
                if (count < 0) {
                    count = imgCol + videoCol - 1;
                    if (video[0] != undefined){
                        video[0].play();
                    }
                }
            } else {
                count++;
                if (count > imgCol + videoCol - 1) {
                    count = 0;
                }

                if (count > imgCol + videoCol - 2) {
                    if (video[0] != undefined){
                        video[0].play();
                    }
                }
            }
            images.style.transform = "translate(-" + count * imgWidth + "%)";
        }
    });
});

function autoSlide(){
    let images = document.querySelector(".gallery-list"),
        imgCol = images.querySelectorAll(".block-img").length,
        imgWidth = 33.3;
    // 22.7

    countGallery++;
    if (countGallery > imgCol - 3){
        countGallery = 0;
    }
    images.style.transform = "translate(-"+countGallery*imgWidth+"%)";
}

// Slide gallery dog
document.querySelector(".photogallery").addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList[0] == "gallery-arrow"){
        let images = document.querySelector(".gallery-list"),
        imgCol = images.querySelectorAll(".block-img").length,
        imgWidth = 33.3;

        clearInterval(intervalSlide);

        if (e.target.classList[1] == "gallery-previous") {
            countGallery--;
            if (countGallery < 0){
                countGallery = imgCol - 3;
            }
        } else {
            countGallery++;
            if (countGallery > imgCol - 3){
                countGallery = 0;
            }
        }
        images.style.transform = "translate(-"+countGallery*imgWidth+"%)";
    }
});

window.addEventListener("scroll", function() {
    const value = window.scrollY;

    if (value >= 300) {
        butRise.style.display = "block";
    } else if (value === 0){
        butRise.style.display = "none";
    }
});

// for (let i = 1; i < contents.length-1; i++) {
//     contents[i].style.maxHeight = contents[i].offsetHeight+"px";
// };



//$('.mfp-gallery').magnificPopup({
//    type: 'image',
//    closeOnContentClick: true,
//    image: {
//        verticalFit: false
//    }
//    gallery: {
//        enabled: true
//    }
//});



//Grouped galleries big photos

var groups = {};
$('.galleryItem').each(function() {
  var id = parseInt($(this).attr('data-group'), 10);

  if(!groups[id]) {
    groups[id] = [];
  }

  groups[id].push( this );
});


$.each(groups, function() {

  $(this).magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      gallery: { enabled:true },
      image: { titleSrc: function(item) {
				return "LAVUSEN DE LAMUR";
			} }

  })

});




// Gallery big photo

$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return "LAVUSEN DE LAMUR";
			}
		}
	});
});