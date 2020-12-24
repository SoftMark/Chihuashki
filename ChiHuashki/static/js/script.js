let butRise = document.getElementById("topChi");
let butNav = document.getElementsByClassName("navigate")

for (var i = 0; i < butNav.length; i++)
{
    butNav[i].onclick = function () {
        console.log(this.href)
    }
}

window.addEventListener("scroll", function() {
    var value = window.scrollY;

    if (value >= 300) {
        butRise.removeAttribute("style")
    } else if (value === 0){
        butRise.style.display = "none"
    }
});

