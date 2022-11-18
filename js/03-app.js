
// We are going to check if there is internet conexion
const updateState = () => {
    if (navigator.onLine) {
        console.log("You have internet conexion")
    } else {
        console.log("You are not conected...")
    }
}

window.addEventListener("online", updateState)
window.addEventListener("offline", updateState)


