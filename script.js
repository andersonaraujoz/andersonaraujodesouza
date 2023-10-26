document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("data-target");

            sections.forEach(section => {
                section.style.display = "none";
            });

            const targetSection = document.getElementById(targetId);
            targetSection.style.display = "block";
        });
    });
});