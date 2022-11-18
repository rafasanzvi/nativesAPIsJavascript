
// VisibilityState: This API check if we are in the page or not, it is using for Youtube when if we open other page the video is stopped

document.addEventListener("visibilitychange", () => {
    if(document.visibilityState === "visible") {
        console.log("Start function to reproduce the video")
    } else {
        console.log("Start function to stop the video")
    }
})

