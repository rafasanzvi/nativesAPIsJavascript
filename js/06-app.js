const salida = document.querySelector("#salida")
const microfono = document.querySelector("#microfono")

microfono.addEventListener("click", ejecutarSpeechAPI)

function ejecutarSpeechAPI() {
    const SpeechRecognition = webkitSpeechRecognition
    const recognition = new SpeechRecognition()

    recognition.start() = () => {
        salida.classList.add("mostrar")
        salida.textContent = "Escuchando"
    }

    recognition.onstart() 

    recognition.onspeechend = () => {
        salida.textContent = "Se dejó de grabar"
        recognition.stop()
    }

    recognition.onresult = e => {
        
        const {confidence, transcript} = e.results[0][0]

        const speech = document.createElement("p")
        speech.innerHTML = `Grabado: ${transcript}`

        const seguridad = document.createElement("p")
        seguridad.innerHTML = `Seguridad: ${parseInt(confidence * 100)} %`
        
        salida.appendChild(speech)

    }
}

