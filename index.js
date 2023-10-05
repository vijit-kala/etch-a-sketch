const gridContainer = document.querySelector('#grid-container');
const resetButton = document.querySelector('#reset-button');
const colorPicker = document.querySelector('#color-picker');

const generateGrid = (rows) => {
  for (let i = 0; i < rows; i++) {
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('row');

    for (let j = 0; j < rows; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.innerText = j + 1;

      rowContainer.appendChild(cell);
    }

    gridContainer.appendChild(rowContainer);
  }
};

generateGrid(16);

const gridItems = document.querySelectorAll('.cell');

console.log(gridItems);

gridItems.forEach((gridItem) => {
  // console.log(gridItem);
  gridItem.addEventListener('mouseover', () => {
    gridItem.classList.add('visited');
    console.log(gridItem.classList);
  });
});

resetButton.addEventListener('click', (e) => {
  e.preventDefault();
  gridItems.forEach((gridItem) => gridItem.classList.remove('visited'));
  // alert('App reset');
  // generateGrid(16);
});
