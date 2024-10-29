// a more efficient JS code

const container = document.querySelector(".container");
const container2 = document.querySelector(".container-2");

const submitBtn = document.getElementById("submit");
const anotherBtn = document.getElementById("another-feedback");

const emojis = document.querySelectorAll(".emoji");
let response = "";

function resetEmojiBackgrounds() {
    emojis.forEach(emoji => emoji.style.backgroundColor = "");
}

emojis.forEach(emoji => {
    emoji.addEventListener("click", () => {
        resetEmojiBackgrounds();
        emoji.style.backgroundColor = "#b3e3e8";
        response = emoji.querySelector("p").innerText;
    });
});

submitBtn.addEventListener("click", () => {
    if (response) {
        container.style.display = "none";
        container2.style.display = "block";
        document.getElementById("feedbak-chosen").innerText = response;
    } else {
        alert("Please choose a feedback");
    }
});

anotherBtn.addEventListener("click", () => {
    container2.style.display = "none";
    container.style.display = "block";
    resetEmojiBackgrounds();
    response = "";
});
