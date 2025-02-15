"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");
document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("audioPlayer");

  // Chờ người dùng tương tác (để tránh bị chặn)
  const playAudio = () => {
      audio.play().catch(error => console.log("Tự động phát bị chặn:", error));
  };

  // Kích hoạt nhạc ngay khi trang tải
  playAudio();

  // Hoặc phát khi người dùng click vào bất kỳ đâu
  document.addEventListener("click", playAudio, { once: true });
});



const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yayyy😎!! (❁´◡`❁)";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Hg",
    "Thoi mờ, bấm lại đi🥹",
    "Suy nghĩ lại nho🤧",
    "Đường làm ăn buồn mờ😰",
    "Em làm tan nát trái tim anh😖",
    "Anh khóc mất😭, thui mừ....❤️",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
