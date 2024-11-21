
if (!window.audio) {
    window.audio = new Audio("romantic.mp3");
    window.audio.loop = true;
    window.audio.volume = 0.5;


    const savedTime = sessionStorage.getItem("audioCurrentTime");
    if (savedTime) {
        window.audio.currentTime = parseFloat(savedTime);
    }

    window.audio.play();
}

window.addEventListener("beforeunload", () => {
    sessionStorage.setItem("audioCurrentTime", window.audio.currentTime);
});
