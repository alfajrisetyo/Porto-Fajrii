// ===============================
// JAM DIGITAL
// ===============================

function updateClock() {
    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString("id-ID", {
            hour12: false
        });

    document.getElementById("date").textContent =
        now.toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long"
        });
}

updateClock();
setInterval(updateClock, 1000

);

// ===============================
// MUSIK MP3
// ===============================
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicBtn");
const musicStatus = document.getElementById("musicStatus");
const musicVolume = document.getElementById("musicVolume");

musicBtn.addEventListener("click", async function () {

    if (music.paused) {
        try {
            await music.play();
            musicBtn.textContent = "♫ Pause Music";
        } catch (error) {
            alert("Pastikan file music.mp3 sudah dimasukkan ke folder website!");
        }
    } else {
        music.pause();
        musicBtn.textContent = "♫ Play Music";
    }

});


if (bgMusic && musicButton) {
    bgMusic.volume = 0.5;

    musicButton.addEventListener("click", async function() {
        if (bgMusic.paused) {
            try {
                await bgMusic.play();
                musicButton.innerHTML = "⏸ Pause Musik";
                musicStatus.innerHTML = "Now Playing: Selamat Ulang Tahun ♡";
            } catch (error) {
                alert("Musik gagal diputar. Pastikan file music.mp3 sudah ada di folder yang sama!");
                console.error(error);
            }
        } 
    });

    if (musicVolume) {
        musicVolume.addEventListener("input", function() {
            bgMusic.volume = Number(this.value);
        });
    }

    bgMusic.addEventListener("ended", function() {
        musicButton.innerHTML = "▶ Play Musik";
        musicStatus.innerHTML = "Musik selesai diputar ♡";
    });
}
