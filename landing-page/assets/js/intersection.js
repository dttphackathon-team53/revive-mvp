const mainHeader = document.querySelector("#main-header");

const currentScroll = window.scrollY;

window.addEventListener("scroll", (e) => {
    if (window.scrollY > mainHeader.offsetHeight) {
        mainHeader.classList.add("add-highlight");
    } else {
        mainHeader.classList.remove("add-highlight");
    }
});
