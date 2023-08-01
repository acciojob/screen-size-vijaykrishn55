//your JS code here. If required.
function setSizeText(width, height) {
  const sizeHeading = document.getElementById("sizeHeading");
  sizeHeading.textContent = `Width: ${width} and Height: ${height}`;
}

// Function to update the size information
function updateSizeInfo() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  setSizeText(windowWidth, windowHeight);
}

// Initial update
updateSizeInfo();

// Add event listener for window resize
window.addEventListener("resize", updateSizeInfo);