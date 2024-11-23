const source = document.getElementById("draggable");
source.addEventListener("dragstart", (event) => {
  event.target.classList.add("dragging");
});

source.addEventListener("dragend", (event) => {
  event.target.classList.remove("dragging");
});