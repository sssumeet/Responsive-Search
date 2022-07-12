const btn = document.querySelectorAll(".btn");

const stopSound = () => {
    btn.forEach((button) => {
        const sound = document.getElementById(button.innerHTML);
        sound.pause();
        sound.currentTime = 0;
    });
}

btn.forEach((button) => {
    button.addEventListener("click" , () => {
        stopSound();
        document.getElementById(button.innerText).play();
    });
});