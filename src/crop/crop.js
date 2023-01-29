let imageData = localStorage.getItem("imageData")
let browseButton = document.getElementById("browse-files-button");
let preview = document.getElementById("image-preview");
let background = document.getElementById("background");
let cropper = document.getElementById("cropper");

if (imageData == null)
    location.href = "http://localhost:8080"

preview.onload = () => {
    background.width = preview.width;
    background.height = preview.height;
    cropper.width = preview.width / 2;
    cropper.height = preview.width / 2;
    let backgroundContext = background.getContext('2d');
    let backgroundRect = background.getBoundingClientRect()
    let cropperRect = cropper.getBoundingClientRect()
    backgroundContext.fillRect(0, 0, preview.width, preview.height);
    backgroundContext.clearRect(cropperRect.x - backgroundRect.x, cropperRect.y - backgroundRect.y, cropperRect.width, cropperRect.height)
}

preview.src = imageData
preview.style.display = "block";

