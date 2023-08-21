const typedText = document.getElementById('typed-text');
const cursor = document.getElementById('cursor');
const codeText = [
  'const name = "Jared Nash";',
  'console.log(`Hello, my name is ${name}.`);',
  'Hello, my name is Jared Nash',
];

let lineIndex = 0;
let charIndex = 0;

function typeCode() {
  if (lineIndex < codeText.length) {
    if (charIndex < codeText[lineIndex].length) {
      typedText.textContent += codeText[lineIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeCode, 60);
    } else {
      lineIndex++;
      charIndex = 0;
      setTimeout(clearText, 1500); // Longer break here
    }
  } else {
    cursor.style.display = 'none';
    setTimeout(startAnimation, 1500); // Longer break here
  }
}

function clearText() {
  typedText.textContent = '';
  setTimeout(typeCode, 1500);
}

function startAnimation() {
  typedText.textContent = '';
  lineIndex = 0;
  charIndex = 0;
  cursor.style.display = 'inline-block';
  typeCode();
}

startAnimation();
