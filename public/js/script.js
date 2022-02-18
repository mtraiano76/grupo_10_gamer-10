const $caratula = document.querySelector("#caratula"),
$imgPreview = document.querySelector("#imgPreview"),
$selectImage = document.querySelector("#imageSelect");

if($imgPreview.src)
{
    $selectImage.style.opacity = 0;
    $imgPreview.style.opacity = 1;
}

$caratula.addEventListener("change", () => {
    
    const coverFiles = $caratula.files;
    if (!coverFiles || !coverFiles.length) {
        $imgPreview.src = "";
        $selectImage.style.opacity = 1;
        $imgPreview.style.opacity = 0;

        return;
    }
    else
    {
        $selectImage.style.opacity = 0;
        $imgPreview.style.opacity = 1;
    }

    const primerArchivo = coverFiles[0];
    const objectURL = URL.createObjectURL(primerArchivo);
    $imgPreview.src = objectURL;
});

const $gallery = document.querySelector("#gallery"),
$galleryList = document.querySelector("#galleryList"),
$selectGallery = document.querySelector("#gallerySelect"),
$galleryDetails = document.querySelector("#galleryDetails");

if($galleryList.firstChild)
{
    $selectGallery.style.opacity = 0;
    $galleryDetails.style.opacity = 1;
}

$gallery.addEventListener("change", () => {
    let galleryFiles = $gallery.files;
    if (!galleryFiles || !galleryFiles.length) {
        $selectGallery.style.opacity = 1;
        $galleryDetails.style.opacity = 0;
    }
    else
    {
        $selectGallery.style.opacity = 0;
        $galleryDetails.style.opacity = 1;
    }

    while (galleryList.firstChild) {
        galleryList.removeChild(galleryList.firstChild);
    }
    
    for (var i = 0; i < galleryFiles.length; i++) {
        var file = galleryFiles[i];
        let line = document.createElement("li");     
        let name = document.createTextNode(file.name);  
        line.appendChild(name); 
        
        galleryList.appendChild(line);
    }
    
});