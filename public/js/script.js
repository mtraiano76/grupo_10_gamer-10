const $caratula = document.querySelector("#caratula"),
$imgPreview = document.querySelector("#imgPreview");

$caratula.addEventListener("change", () => {
    const coverFiles = $caratula.files;
    if (!coverFiles || !coverFiles.length) {
        $imgPreview.src = "";
        return;
    }

    console.log(coverFiles);

    const primerArchivo = coverFiles[0];
    const objectURL = URL.createObjectURL(primerArchivo);
    $imgPreview.src = objectURL;
});

const $gallery = document.querySelector("#gallery"),
$galleryList = document.querySelector("#galleryList")

$gallery.addEventListener("change", () => {
    let galleryFiles = $gallery.files;
    if (!galleryFiles || !galleryFiles.length) {
    }
    
    for (var i = 0; i < galleryFiles.length; i++) {
        var file = galleryFiles[i];
        let line = document.createElement("li");     
        let name = document.createTextNode(file.name);  
        line.appendChild(name); 
        
        galleryList.appendChild(line);
    }
});