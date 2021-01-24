let butRise = document.getElementById("topChi"),
    arrowPrevious = document.getElementById("previous-img"),
    arrowNext = document.getElementById("next-img"),
    contents = document.getElementsByClassName("content"),
    imagesDog = document.querySelectorAll(".images"),
    count = 0,
    countGallery = 0,
    width;

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

// Slide images dog
imagesDog.forEach(img => {
    let count = 0;
    img.querySelectorAll(".arrow-dog").forEach( arrow => {

        arrow.addEventListener("click", function (e) {
            e.preventDefault();

            let images = img.querySelector(".img-line"),
                imgCol = images.querySelectorAll("img").length,
                imgWidth = 20;


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
            images.style.transform = "translate(-"+count*imgWidth+"vw)";
        });
    });
});


// Slide gallery dog
document.querySelectorAll(".gallery-arrow").forEach( arrow => {
    arrow.addEventListener("click", function (e) {
        e.preventDefault();

        let images = document.querySelector(".gallery-list"),
            imgCol = images.querySelectorAll(".block-img").length,
            imgWidth = 22.7;


        if (this.classList[1] == "gallery-previous") {
            countGallery--;
            if (countGallery < 0){
                countGallery = imgCol - 1;
            }
        } else {
            countGallery++;
            if (countGallery > imgCol - 1){
                countGallery = 0;
            }
        }
        console.log(countGallery);
        images.style.transform = "translate(-"+countGallery*imgWidth+"vw)";
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

