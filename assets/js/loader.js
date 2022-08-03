const loader = document.querySelector('.loader');
const loaderPrecent = document.querySelector('.loader__preccent');

loaderAnim(100, 5, 1);

function loaderAnim(finishNum, step, seconds) {
  const int = (seconds * 1000) / (finishNum / step) - 10;
  let currentNum = 0;

  const interval = setInterval( () => {
    loaderPrecent.textContent = currentNum + '%';
    currentNum += step;

    if(currentNum > 100) {
      loader.classList.add('loaded');
      clearInterval(interval);

      setTimeout( () => {
        loader.classList.add('dn');
      }, 2000)
    }
  }, int)
}