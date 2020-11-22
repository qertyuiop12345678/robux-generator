const robuxGeneratorButton = document.querySelector('button');
const robuxCode = document.querySelector('div.robux-code');
const robuxCodePartOne = robuxCode.querySelector('.part-one');
const robuxCodePartTwo = robuxCode.querySelector('.part-two');
const robuxCodePartThree = robuxCode.querySelector('.part-three');
const pendingMessage = document.querySelector('.pending-message');
const successMessage = document.querySelector('.success-message');
const tooltipText = document.querySelector('.tooltip .tooltip-text');
const copyIcon = document.querySelector('img.copy');

export {
  copyIcon,
  robuxGeneratorButton,
  robuxCode,
  robuxCodePartOne,
  robuxCodePartTwo,
  robuxCodePartThree,
  pendingMessage,
  successMessage,
  tooltipText,
};
