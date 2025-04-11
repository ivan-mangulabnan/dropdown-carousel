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
    })
  }
}