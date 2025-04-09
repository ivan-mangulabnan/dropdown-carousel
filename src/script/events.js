export class Events { }

export function dropdownEvent() {
  const dropdownButton = document.querySelector('.dropdown-icon');
  const dropdownDiv = document.querySelector('.dropdown-div');

  dropdownButton.addEventListener('mouseover', event => {
    dropdownDiv.classList.toggle('visible');
  })

  dropdownDiv.addEventListener('mouseleave', event => {
    dropdownDiv.classList.toggle('visible');
  })
}