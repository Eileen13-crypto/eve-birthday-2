const openButton = document.getElementById("openButton");
const scrapbook = document.getElementById("scrapbook");

openButton.addEventListener("click", function () {

    scrapbook.scrollIntoView({
        behavior: "smooth"
    });

});