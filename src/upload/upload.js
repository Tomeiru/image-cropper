const reader = new FileReader();
let fileInput = document.getElementById("file-input");
let browseButton = document.getElementById("browse-files-button");
let submitButton = document.getElementById("submit-file-button");
let preview = document.getElementById("image-preview");
let imageData = null

localStorage.removeItem("imageData");
reader.addEventListener("load", () => {
    preview.src = reader.result;
    imageData = reader.result;
    preview.style.display = "block";
    submitButton.style.display = "block"
});

document.addEventListener('drop', (event) => {
    preventDefaultBehavior(event)
    let file = event.dataTransfer.files[0]
    changePreviewFromFile(file)
});

document.addEventListener('dragover', preventDefaultBehavior);

document.addEventListener('dragenter', preventDefaultBehavior);

document.addEventListener('dragleave', preventDefaultBehavior);

fileInput.addEventListener("click", () => {
    fileInput.addEventListener("change", () => {
        let file = fileInput.files[0];
        changePreviewFromFile(file)
    });
});

browseButton.addEventListener("click", () => {
    fileInput.click();
});

submitButton.addEventListener("click", () => {
    if (imageData === null)
        return;
    localStorage.setItem("imageData", imageData);
    location.href = "http://localhost:8080/crop"
})

function changePreviewFromFile(file) {
    if (file)
        reader.readAsDataURL(file)
}

function preventDefaultBehavior(event) {
    event.stopPropagation()
    event.preventDefault()
}