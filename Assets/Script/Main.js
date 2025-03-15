document.addEventListener("DOMContentLoaded", function () {
    const ctaButton = document.querySelector(".cta");
    ctaButton.addEventListener("click", function () {
        window.location.href = "#contact";
    });

    const loadMoreButton = document.querySelector(".load-more");
    loadMoreButton.addEventListener("click", function () {
        alert("More projects coming soon!");
    });

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
});
