const target = document.getElementById("drop-target");
target.addEventListener("dragenter", (event) => {
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("dragover");
  }
});

target.addEventListener("dragleave", (event) => {
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
});
