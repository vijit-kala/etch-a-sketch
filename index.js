const gridContainer = document.querySelector('#grid-container');

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
  gridItem.addEventListener('mousedown', () => {
    gridItem.classList.add('visited');
    console.log(gridItem.classList);
  });
});
