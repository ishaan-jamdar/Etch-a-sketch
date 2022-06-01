const container = document.querySelector('.canvas');
const input = document.querySelector('input');
const canvas = document.querySelector('.canvas');
const sizeText = document.querySelector('.size-text');

function createCanvas(size) {
  for (let i = 0; i < size ** 2; i++) {
    let square = document.createElement('div');
    square.style.height = `${512 / size}px`;
    square.style.width = `${512 / size}px`;
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  
    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = 'black';
    });

    // eraser feature
    square.addEventListener('click', () => {
      square.style.backgroundColor = '';
    });
  
    container.appendChild(square);
  }
}

input.addEventListener('input', e => {
  container.innerHTML = '';
  sizeText.textContent = `Canvas Size: ${e.target.value}x${e.target.value}`
  createCanvas(e.target.value);
})

createCanvas(16);
