const container = document.querySelector('.canvas');

for (let i = 0; i < 256; i++) {
  let square = document.createElement('div');
  square.classList.add('grid-square');

  square.addEventListener('mouseenter', () => {
    square.classList.add('hovered');
  });

  container.appendChild(square);
}
