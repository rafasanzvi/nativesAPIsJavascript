
// Intersection observer API

document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver(entries => { // Este código habilita intersección observer
        if(entries[0].isIntersecting) {
            console.log("The element is visible")
        } else {
            console.log("The element is not visible")
        }
    })

    observer.observe(document.querySelector(".premium")) // Vamos a observar el elemento con la clase "premium"
})