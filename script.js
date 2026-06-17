const gate = document.getElementById("gate");
const openBtn = document.getElementById("openInvitation");
const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

let musicPlaying = false;

/* ==========================
   OPEN INVITATION
========================== */

openBtn.addEventListener("click", () => {

    gate.classList.add("hide");

    musicToggle.classList.remove("hidden");

    // Play music after user interaction
    music.play()
        .then(() => {
            musicPlaying = true;
            musicToggle.classList.add("playing");
            musicToggle.innerHTML = "♪";
        })
        .catch((error) => {
            console.log("Audio playback blocked:", error);

            musicPlaying = false;
            musicToggle.innerHTML = "🔇";
        });

});

/* ==========================
   MUSIC TOGGLE
========================== */

musicToggle.addEventListener("click", () => {

    if (music.paused) {

        music.play()
            .then(() => {
                musicPlaying = true;
                musicToggle.classList.add("playing");
                musicToggle.innerHTML = "♪";
            })
            .catch((err) => {
                console.log("Unable to play audio:", err);
            });

    } else {

        music.pause();
        musicPlaying = false;

        musicToggle.classList.remove("playing");
        musicToggle.innerHTML = "🔇";
    }

});

/* ==========================
   SCROLL REVEAL
========================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".fade-section").forEach(section => {
    observer.observe(section);
});

/* ==========================
   HERO LOAD ANIMATION
========================== */

window.addEventListener("load", () => {

    document.querySelectorAll(".fade-section")[0]
        .classList.add("show");

});
