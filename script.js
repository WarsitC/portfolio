// Fade-in sections on scroll
const sections = document.querySelectorAll("section");

const showSection = () => {
    const triggerBottom = window.innerHeight - 100;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom){
            section.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", showSection);
window.addEventListener("load", showSection);
