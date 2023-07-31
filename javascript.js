const drawingBoard = document.querySelector('.drawingBoard');
const colorWheel = document.querySelector('#colorWheel');
const slider = document.querySelector('#slider')
const sliderValue = document.querySelector('#sliderValue');
const clearButton = document.querySelector('.clearButton');

let size = 4;
let isMouseDown = false;
let color = '#0000FF';

colorWheel.addEventListener('input', () => {
  const colorValue = colorWheel.value;
  color = colorValue;
});

slider.addEventListener('input', () => {
  const value = slider.value;
  sliderValue.textContent = value;
  size = value;
  createSquares(value);
});

clearButton.addEventListener('click', () => {
  createSquares(size);
});

function createSquares(num) {
  drawingBoard.innerHTML = '';
  drawingBoard.style.gridTemplateColumns = `repeat(${num}, 1fr)`;

  for (let i = 0; i < num * num; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    drawingBoard.appendChild(square);

    square.addEventListener('mousedown', () => {
      isMouseDown = true;
      square.style.backgroundColor = color;
    });

    square.addEventListener('mouseover', () => {
      if (isMouseDown) {
        square.style.backgroundColor = color;
      }
    });

    square.addEventListener('mouseup', () => {
      isMouseDown = false;
    });
  }
}

createSquares(size);
