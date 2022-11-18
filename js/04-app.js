
// Full Screen, similar to the youtube function
const fullScreen = () => {
    document.documentElement.requestFullscreen()
}

const closeScreen = () => {
    document.exitFullscreen()
}


const BtnopenFullScreen = document.querySelector("#abrir-pantalla-completa")
const BtncloseFullScreen = document.querySelector("#salir-pantalla-completa")

BtnopenFullScreen.addEventListener("click", fullScreen)
BtncloseFullScreen.addEventListener("click", closeScreen)

