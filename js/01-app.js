const notificarBtn = document.querySelector("#notificar")

notificarBtn.addEventListener("click", () => {

    Notification
        .requestPermission()
        .then(resultado => {
            console.log("Aquí está el resultado: ", resultado)
        })
})

const verNotificacion = document.querySelector("#verNotificacion")
verNotificacion.addEventListener("click", () => {
    if(Notification.permission === "granted") {
        const notificacion = new Notification("Javascript", {
            icon: "img/ccj.png",
            body: "Aprendiendo con prácticas chachis"
        })
        notificacion.onclick = () => window.open("https://www.zara.com")
    }
})