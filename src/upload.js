const reader = new FileReader();
let fileInput = document.getElementById("file-input");
let button = document.getElementById("browse-files-button");
let preview = document.getElementById("image-preview");

reader.addEventListener("load", () => {
    preview.src = reader.result;
    preview.style.display = "block";
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

button.addEventListener("click", () => {
    fileInput.click();
});

function changePreviewFromFile(file) {
    if (file)
        reader.readAsDataURL(file)
}

function preventDefaultBehavior(event) {
    event.stopPropagation()
    event.preventDefault()
}