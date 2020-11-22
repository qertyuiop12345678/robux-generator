import { clearContent } from './clear-content.js';
import { copyCode } from './copy.js';
import { generateRandomString } from './generate-random-string.js';
import { generateSpan } from './generate-span.js';
import {
  copyIcon,
  pendingMessage,
  robuxCodePartOne,
  robuxCodePartThree,
  robuxCodePartTwo,
  robuxGeneratorButton,
  successMessage,
} from './selectors.js';

let code = [];
let randomString;
let generateCodeIntervalId;
let chooseCodeCharIntervalId;

function generateCode() {
  clearContent(robuxCodePartOne);
  clearContent(robuxCodePartTwo);
  clearContent(robuxCodePartThree);

  const nodes = code.map(function (codeChar) {
    return generateSpan({ className: 'code-digit-success', value: codeChar });
  });

  if (nodes.length !== 10) {
    randomString = generateRandomString();
    while (nodes.length < 10) {
      const numNodes = nodes.length;
      const value = randomString.slice(numNodes, numNodes + 1);
      nodes.push(generateSpan({ className: 'code-digit-pending', value }));
    }
  } else {
    clearInterval(generateCodeIntervalId);
    clearInterval(chooseCodeCharIntervalId);

    robuxGeneratorButton.disabled = false;

    successMessage.classList.remove('hidden');
    pendingMessage.classList.add('hidden');
  }

  nodes.forEach(function (node, idx) {
    if (idx < 3) {
      robuxCodePartOne.appendChild(node);
    } else if (idx < 6) {
      robuxCodePartTwo.appendChild(node);
    } else {
      robuxCodePartThree.appendChild(node);
    }
  });
}

function chooseCodeChar() {
  const nextIndex = code.length;
  code.push(randomString.substring(nextIndex, nextIndex + 1));
}

robuxGeneratorButton.addEventListener('click', function () {
  successMessage.classList.add('hidden');
  pendingMessage.classList.remove('hidden');
  robuxGeneratorButton.disabled = true;
  code = [];
  generateCodeIntervalId = setInterval(generateCode, 100);
  chooseCodeCharIntervalId = setInterval(chooseCodeChar, 1000);
});

copyIcon.addEventListener('click', copyCode);
