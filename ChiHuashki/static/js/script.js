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
        openBut.style.display = "inline";
    }

    openBut.addEventListener("click", function (e) {
        let heightConteiner = conteinerDogs.scrollHeight
        this.removeAttribute("style");
        closeBut.style.display = "inline";
        conteinerDogs.style.height = heightConteiner + "px";
    })

    closeBut.addEventListener("click", function (e) {
        this.removeAttribute("style");
        openBut.style.display = "inline";
        conteinerDogs.removeAttribute("style");
    })
})

// Slide images dog
imagesDog.forEach(img => {
    let count = 0;
    img.querySelectorAll(".arrow-dog").forEach( arrow => {

        arrow.addEventListener("click", function (e) {
            e.preventDefault();

            let images = img.querySelector(".img-line"),
                image = images.querySelectorAll("img"),
                imgCol = image.length,
                imgWidth = 100;


            if (this.classList[1] == "previous-img") {
                count--;
                if (count < 0){
                    count = imgCol - 1;
                }
            } else {
                count++;
                if (count > imgCol - 1){
                    count = 0;
                }
            }
            images.style.transform = "translate(-"+count*imgWidth+"%)";
        });
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
document.querySelectorAll(".gallery-arrow").forEach( arrow => {
    arrow.addEventListener("click", function (e) {
        e.preventDefault();

        let images = document.querySelector(".gallery-list"),
        imgCol = images.querySelectorAll(".block-img").length,
        imgWidth = 33.3;


        if (this.classList[1] == "gallery-previous") {
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
    });
});

window.addEventListener("scroll", function() {
    console.log("scroll")
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

