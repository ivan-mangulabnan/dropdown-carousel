import { Main } from "./dom.js";

(function () { // Creates a mini-btn for each picture
  const images = Array.from(Main.imageContainer.querySelectorAll('div'));
  images.forEach(div => {
    const miniBtn = document.createElement('button');
    miniBtn.classList.add('mini-btn');
    Main.miniBtnContainer.appendChild(miniBtn);
  })
})();

(function () { // Applies a red glow to the mini-button with the same location of counterpart image.
  const images = Array.from(Main.imageContainer.querySelectorAll('div'));
  const miniBtns = Array.from(Main.miniBtnContainer.querySelectorAll('button'));
  const focus = images.findIndex(img => img.classList.contains('img'));

  miniBtns[focus].classList.add('focus-btn');
})();