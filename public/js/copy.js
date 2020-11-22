import { tooltipText, robuxCode } from './selectors.js';

function copyCode() {
  const value = robuxCode.innerText.split('\n').join('');

  const element = document.createElement('textarea');
  element.value = value;
  element.setAttribute('readonly', '');
  element.style.position = 'absolute';
  element.style.left = '-9999px';
  document.body.appendChild(element);
  element.select();
  document.execCommand('copy');
  document.body.removeChild(element);

  tooltipText.classList.remove('hidden');

  setTimeout(function () {
    tooltipText.classList.add('hidden');
  }, 1000);
}

export { copyCode };
