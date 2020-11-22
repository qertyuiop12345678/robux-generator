function generateSpan ({ className, value }) {
  const span = document.createElement('span');
  span.setAttribute('class', className);
  span.innerHTML = value;
  return span;
}


export { generateSpan };
