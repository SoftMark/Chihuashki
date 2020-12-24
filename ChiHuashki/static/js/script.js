let butRise = document.getElementById("topChi");

window.addEventListener("scroll", function() {
    var value = window.scrollY;

    if (value >= 300) {
        butRise.removeAttribute("style")
    } else if (value === 0){
        butRise.style.display = "none"
    }
})