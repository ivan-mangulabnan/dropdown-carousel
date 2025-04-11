import { Main } from "./dom.js";
import { moveDisplayedImage } from "./util.js";

export class Events { 
  static click () {
    document.addEventListener('click', event => {
      if (event.target === Main.btnRight){
        moveDisplayedImage();
      }

      if (event.target === Main.btnLeft){
        moveDisplayedImage(Main.btnLeft);
      }

      if (event.target.closest('div') === Main.miniBtnContainer) {
        let imageIndex;

        Array.from(Main.miniBtnContainer.querySelectorAll('button')).forEach((button, index) => {
          button.classList.remove('focus-btn');

          if (event.target === button) {
            button.classList.add('focus-btn');
            imageIndex = index;
          }
        })

        Array.from(Main.imageContainer.querySelectorAll('div')).forEach((image, index) => {
          image.classList.remove('img');
          
          if(index == imageIndex) {
            image.classList.add('img');
          }
        })
      }
    })
  }
}