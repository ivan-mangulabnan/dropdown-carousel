export function dropdownStyle(activatorEle, targetEle) {
  targetEle.classList.add('hidden');

  activatorEle.addEventListener('mouseover', event => {
    targetEle.classList.toggle('visible');
  })

  targetEle.addEventListener('mouseleave', event => {
    targetEle.classList.toggle('visible');
  })
}