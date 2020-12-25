let butRise = document.getElementById("topChi");

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

document.querySelectorAll(".title").forEach(id => {
    id.addEventListener("scroll", function (e) {
        e.preventDefault();


    });
});

window.addEventListener("scroll", function() {
    const value = window.scrollY;

    if (value >= 300) {
        butRise.removeAttribute("style")
    } else if (value === 0){
        butRise.style.display = "none"
    }
});

