document.getElementById("wordInput").addEventListener("input", function () {
    let inputText = this.value.toUpperCase();
    let thunderText = document.getElementById("thunderText");
    
    thunderText.innerHTML = ""; 

    inputText.split("").forEach((letter, index) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.classList.add("letter");
        thunderText.appendChild(span);

       
        setTimeout(() => {
            span.style.opacity = "1";
            span.style.animation = "thunderEffect 0.2s infinite alternate";
            triggerLightning();
        }, index * 400);

       
        setTimeout(() => {
            span.style.animation = "shockEffect 0.1s infinite alternate";
            playShockSound();
        }, index * 400 + 200);
    });
});

function playThunderSound() {
    let thunderSound = document.getElementById("thunderSound");
    thunderSound.currentTime = 0;
    thunderSound.play();
}

function playShockSound() {
    let shockSound = document.getElementById("shockSound");
    shockSound.currentTime = 0;
    shockSound.play();
}


function triggerLightning() {
    let flash = document.querySelector(".lightning-flash");
    flash.style.animation = "lightningFlashEffect 0.3s";
    
    setTimeout(() => {
        flash.style.animation = "none";
    }, 300);
    
    playThunderSound();
}
