let butRise = document.getElementById("topChi");
let contents = document.getElementsByClassName("content");
let count = 0;
let width;


// document.querySelectorAll('.images').forEach(dog => {
//     dog.addEventListener("mouseover", function (e) {
//         e.preventDefault();
//
//         init(this);
//
//     });
// });

function init(photo){
    let dog_line = photo.querySelector('.img-line');
    let dog_images = photo.querySelectorAll('.img-dog');
    console.log("resize");
    width = photo.offsetWidth;
    if (dog_line)
        dog_line.style.width = width * dog_images.length + "px";
    console.log(width);
    console.log(dog_line);
    console.log(dog_images);
}

document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        let href = this.getAttribute("href").substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector("#menu-links").offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});

// document.querySelectorAll(".title").forEach(id => {
//     id.addEventListener("scroll", function (e) {
//         e.preventDefault();
//
//
//     });
// });

window.addEventListener("scroll", function() {
    const value = window.scrollY;

    if (value >= 300) {
        butRise.removeAttribute("style");
    } else if (value === 0){
        butRise.style.display = "none";
    }
});

// for (let i = 1; i < contents.length-1; i++) {
//     contents[i].style.maxHeight = contents[i].offsetHeight+"px";
// };

