const mainContainer = document.getElementById("main-container");
const circle = document.getElementById("circle");
// to place the circle in the middle
let positionOnXaxis = mainContainer.offsetWidth / 2 - circle.offsetWidth / 2;
let positionOnYaxis = mainContainer.offsetHeight / 2 - circle.offsetHeight / 2;
let movementSize = 25;
// starting position
circle.style.left = positionOnXaxis + "px";
circle.style.top = positionOnYaxis + "px";

window.addEventListener("keydown", (e) => {
  // When left arrow key is pressed
  if (e.key === "ArrowLeft" && positionOnXaxis - movementSize >= 0) {
    positionOnXaxis -= movementSize;
  } else if (e.key === "ArrowLeft") {
    positionOnXaxis = 0;
  }

  // When Top arrow key is pressed
  if (e.key === "ArrowUp" && positionOnYaxis - movementSize >= 0) {
    positionOnYaxis -= movementSize;
  } else if (e.key === "ArrowUp") {
    positionOnYaxis = 0;
  }

  // When Right arrow key is pressed
  if (
    e.key === "ArrowRight" &&
    positionOnXaxis + movementSize <=
      mainContainer.offsetWidth - circle.offsetWidth
  ) {
    positionOnXaxis += movementSize;
  } else if (e.key === "ArrowRight") {
    positionOnXaxis = mainContainer.offsetWidth - circle.offsetWidth;
  }

  // When Down arrow key is pressed
  if (
    e.key === "ArrowDown" &&
    positionOnYaxis + movementSize <=
      mainContainer.offsetHeight - circle.offsetHeight
  ) {
    positionOnYaxis += movementSize;
  } else if (e.key === "ArrowDown") {
    positionOnYaxis = mainContainer.offsetHeight - circle.offsetHeight;
  }
  circle.style.top = positionOnYaxis + "px";
  circle.style.left = positionOnXaxis + "px";
});

mainContainer.addEventListener("click", (e) => {
  // Calculate the new position based on the mouse click and getting the center of the circle
  positionOnXaxis =
    e.clientX - mainContainer.offsetLeft - circle.offsetWidth / 2;
  positionOnYaxis =
    e.clientY - mainContainer.offsetTop - circle.offsetHeight / 2;
  if (
    positionOnXaxis >= 0 &&
    positionOnYaxis >= 0 &&
    positionOnXaxis + circle.offsetWidth <= mainContainer.offsetWidth &&
    positionOnYaxis + circle.offsetHeight <= mainContainer.offsetHeight
  ) {
    circle.style.left = positionOnXaxis + "px";
    circle.style.top = positionOnYaxis + "px";
  }
});
