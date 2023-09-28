// Function to handle cell click
function handleCellClick(cellId) {
  var cell = document.getElementById(cellId);
  // Check if the cell has already been clicked
  if (!cell.getAttribute("data-clicked")) {
    // Change the cell content
    cell.style.backgroundColor = "red";
    // Mark the cell as clicked
    cell.setAttribute("data-clicked", "true");
  }
}
// Add click event listeners to all table cells
var cells = document.querySelectorAll("td");
cells.forEach(function (cell) {
  cell.addEventListener("click", function () {
    handleCellClick(cell.id);
  });
});
