// 1. JAM DIGITAL & PESAN MENGETIK OTOMATIS
function updateClock() {
    const now = new Date();
    document.getElementById("liveClock").textContent = now.toLocaleTimeString('id-ID');
}
setInterval(updateClock, 1000);
updateClock();

const morningText = "Semoga hari ini membawa banyak kehangatan, senyuman manis, dan kelancaran dalam segala hal untukmu, Olaa! Have a wonderful day! 🌻";
let index = 0;

function typeWriter() {
    if (index < morningText.length) {
        document.getElementById("typingMessage").textContent += morningText.charAt(index);
        index++;
        setTimeout(typeWriter, 45);
    }
}
window.onload = typeWriter;


// 2. PEMUTAR MUSIK (MUSIC PLAYER)
const bgMusic = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicBtn");
const musicStatus = document.getElementById("musicStatus");
const musicVolume = document.getElementById("musicVolume");

if (bgMusic && musicButton) {
    bgMusic.volume = 0.5;

    musicButton.addEventListener("click", async function() {
        if (bgMusic.paused) {
            try {
                await bgMusic.play();
                musicButton.innerHTML = "⏸ Pause Musik";
                musicStatus.innerHTML = "Now Playing: Musik Pagi Spesial ♡";
            } catch (error) {
                alert("Musik gagal diputar. Pastikan file music.mp3 sudah ada di folder yang sama!");
                console.error(error);
            }
        } else {
            bgMusic.pause();
            musicButton.innerHTML = "▶ Play Musik";
            musicStatus.innerHTML = "Musik dijeda ♡";
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


// 3. FITUR MOOD TRACKER
function selectMood(mood) {
    const responses = {
        'happy': "Senang mendengarnya! Pertahankan terus energi positif itu ya, Olaa! 😄",
        'sleepy': "Wah, sepertinya butuh secangkir teh atau kopi hangat nih. Yuk kumpulin nyawa dulu! ☕",
        'excited': "Yeay! Semoga semangat membara ini bertahan seharian penuh ya! ✨",
        'cozy': "menikmati waktu santai, semoga hari ini berjalan dengan tenang dan nyaman. 🧸"
    };
    document.getElementById("moodResponse").textContent = responses[mood] || "";
}


// 4. RACIK MINUMAN VIRTUAL
function makeCoffee(type) {
    const drinks = {
        'kopi': "Secangkir kopi hangat spesial berhasil diracik khusus untuk Olaa! ☕✨",
        'teh': "Teh hangat manis dengan aroma melati siap menemani pagimu! 🍵💛",
        'coklat': "Hot chocolate manis dan lembut untuk membangkitkan mood-mu! 🍫🥰"
    };
    document.getElementById("coffeeResult").textContent = drinks[type];
}


// 5. KARTU SEMANGAT / COMPLIMENT GENERATOR
function randomCompliment() {
    const messages = [
        "Olaa, senyumanmu hari ini bisa mencerahkan dunia! 🌻",
        "Jangan lupa tersenyum ya, karena harimu akan terasa jauh lebih indah! ✨",
        "Semesta mendukung setiap langkah baik yang kamu ambil hari ini. 🌷"
    ];
    const random = Math.floor(Math.random() * messages.length);
    document.getElementById("complimentResult").textContent = messages[random];
}


// 6. KOTAK KEJUTAN
function openSurprise() {
    const surprises = [
        "Surprise! Virtual bouquet bunga matahari spesial untuk Olaa! 🌻💐",
        "Sending you a warm hug virtual untuk mengawali pagi! 🧸💛",
        "Ingat ya, kamu berhak mendapatkan hal-hal paling membahagiakan hari ini! 🎁✨"
    ];
    const random = Math.floor(Math.random() * surprises.length);
    document.getElementById("surpriseIcon").textContent = "💝";
    document.getElementById("surpriseMessage").textContent = surprises[random];
}


// 7. TOGGLE COZY MODE
function toggleCozyMode() {
    document.body.classList.toggle("cozy-mode");
}


// 8. SIMPAN HARAPAN
function saveWish() {
    const inputVal = document.getElementById("userWishInput").value.trim();
    const output = document.getElementById("wishOutput");
    
    if (inputVal !== "") {
        output.textContent = `Harapan tersimpan: "${inputVal}" ✨ Semoga semesta mengabulkannya hari ini!`;
        document.getElementById("userWishInput").value = "";
    } else {
        output.textContent = "Yuk, tuliskan sedikit harapan atau doamu hari ini! 💛";
    }
}