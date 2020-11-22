// Found this function here: https://stackoverflow.com/a/27747377

function dec2hex (dec) {
  return dec < 10
    ? '0' + String(dec)
    : dec.toString(16);
}

function generateRandomString () {
  const arr = new Uint8Array(10);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, dec2hex).join('');
}

export { generateRandomString };
