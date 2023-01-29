let imageData = localStorage.getItem("imageData")
let browseButton = document.getElementById("browse-files-button");
let preview = document.getElementById("image-preview");
let background = document.getElementById("background");
let cropper = document.getElementById("cropper");

if (imageData == null)
    location.href = "http://localhost:8080"

preview.src = imageData
preview.style.display = "block";

