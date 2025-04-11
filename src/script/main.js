import { Main } from "./dom.js";

(function () { // Creates a mini-btn for each picture
  const images = Array.from(Main.imageContainer.querySelectorAll('div'));
  images.forEach(div => {
    const miniBtn = document.createElement('button');
    miniBtn.classList.add('mini-btn');
    Main.miniBtnContainer.appendChild(miniBtn);
  })
})();