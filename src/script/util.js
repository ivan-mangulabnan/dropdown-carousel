import { Main } from "./dom.js";

export function dropdownStyle (activatorEle, targetEle) {
  targetEle.classList.add('hidden');

  activatorEle.addEventListener('mouseover', event => {
    targetEle.classList.toggle('visible');
  })

  targetEle.addEventListener('mouseleave', event => {
    targetEle.classList.toggle('visible');
  })
}

export function moveDisplayedImage (eventTarget = null) {
  const divs = Array.from(Main.imageContainer.querySelectorAll('div'));
  const miniBtns = Array.from(Main.miniBtnContainer.querySelectorAll('button'));
  const focus = divs.findIndex(div => div.classList.contains('img'));
  let target = ((focus + 1) > (divs.length - 1)) ? 0 : focus + 1;

  if (eventTarget === Main.btnLeft) {
    target = ((focus - 1) < 0) ? divs.length - 1 : focus - 1;
  }

  divs.forEach((div, index) => {
    div.classList.remove('img')
    if (index === target) {
      div.classList.add('img');
    }
  })

  miniBtns.forEach((btn, index) => {
    btn.classList.remove('focus-btn')
    if (index === target) {
      btn.classList.add('focus-btn');
    }
  })
}