function validateCoverage(file) {
    if (fileTypes.includes(file.type)) {
        $imgPreview.classList.remove("input-error");
        $imgPreview.classList.add("input-succes");
        $selectImage.classList.remove("input-error");
        $selectImage.classList.add("input-succes");
        fields.image = true;
        return true;
    }
    else {
        $imgPreview.classList.remove("input-succes");
        $imgPreview.classList.add("input-error");
        $selectImage.classList.remove("input-succes");
        $selectImage.classList.add("input-error");
        fields.image = false;

        return false;
    }
}

const fileTypes = [
    "image/bmp",
    "image/jpeg",
    "image/png",
];

const $caratula = document.querySelector("#caratula"),
    $imgPreview = document.querySelector("#imgPreview"),
    $selectImage = document.querySelector("#imageSelect");

if ($imgPreview.src) {
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
    else {
        $selectImage.style.opacity = 0;
        $imgPreview.style.opacity = 1;
    }

    const primerArchivo = coverFiles[0];
    if (primerArchivo && validateCoverage(primerArchivo)) {
        const objectURL = URL.createObjectURL(primerArchivo);
        $imgPreview.src = objectURL;
    }
    else {
        $imgPreview.src = "";
        $selectImage.style.opacity = 1;
        $imgPreview.style.opacity = 0;

        return;
    }
});

const $gallery = document.querySelector("#gallery"),
    $galleryList = document.querySelector("#galleryList"),
    $selectGallery = document.querySelector("#gallerySelect"),
    $galleryDetails = document.querySelector("#galleryDetails");

if ($galleryList.firstChild) {
    $selectGallery.style.opacity = 0;
    $galleryDetails.style.opacity = 1;
}

$gallery.addEventListener("change", () => {
    let galleryFiles = $gallery.files;
    if (!galleryFiles || !galleryFiles.length) {
        $selectGallery.style.opacity = 1;
        $galleryDetails.style.opacity = 0;
    }
    else {
        $selectGallery.style.opacity = 0;
        $galleryDetails.style.opacity = 1;
    }

    while (galleryList.firstChild) {
        galleryList.removeChild(galleryList.firstChild);
    }

    for (var i = 0; i < galleryFiles.length; i++) {
        var file = galleryFiles[i];
        if (fileTypes.includes(file.type)) {
            let line = document.createElement("li");
            let name = document.createTextNode(file.name);
            line.appendChild(name);

            galleryList.appendChild(line);
        }
        else {
            fields.previews = false
            $selectGallery.style.opacity = 1;
            $galleryDetails.style.opacity = 0;
            $gallery.value = '';
            $selectGallery.classList.remove("input-succes");
            $selectGallery.classList.add("input-error");
            $galleryDetails.classList.remove("input-succes");
            $galleryDetails.classList.add("input-error");
            return;
        }
    }
    fields.previews = true;
    $selectGallery.classList.remove("input-error");
    $selectGallery.classList.add("input-succes");
    $galleryDetails.classList.remove("input-error");
    $galleryDetails.classList.add("input-succes");
});

const expressions = {
    description: /^[a-zA-ZÀ-ÿ\s]{5,500}$/,
    name: /^[a-zA-ZÀ-ÿ\s]{5,40}$/,
}

const fields = {
    name: false,
    precio: false,
    date: false,
    videoUrl: false,
    desarrolladora: false,
    productora: false,
    juagdores: false,
    idioma: false,
    discount: false,
    category: false,
    description: false,
    previews: true,
    image: true,
}

const form = document.querySelector('#form-create');
const inputs = document.querySelectorAll('form input');
const selects = document.querySelectorAll('form select');
const textArea = document.querySelector('form textarea');

function validURL(input, value) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

    if (value && pattern.test(value)) {
        input.classList.remove("input-error");
        input.classList.add("input-succes");
        fields['videoUrl'] = true;
    }
    else {
        input.classList.add("input-error");
        input.classList.remove("input-succes");
        fields['videoUrl'] = false;
    }
}

const fieldValidation = (expression, input, value) => {
    if (value && expression.test(value)) {
        input.classList.remove("input-error");
        input.classList.add("input-succes");
        fields[input.id] = true;
    }
    else {
        input.classList.add("input-error");
        input.classList.remove("input-succes");
        fields[input.id] = false;
    }
}

const selectValidation = (select, value) => {
    if (value >= 1) {
        select.classList.remove("input-error");
        select.classList.add("input-succes");
        fields[select.id] = true;
    }
    else {
        select.classList.add("input-error");
        select.classList.remove("input-succes");
        fields[select.id] = false;
    }
}

const dateValidation = (input, value) => {
    if (isNaN(Date.parse(value))) {
        input.classList.add("input-error");
        input.classList.remove("input-succes");
        fields[input.id] = false;
    }
    else {
        var parts = value.split('-');
        let date = new Date(parts[0], parts[1], parts[2]);
        if (date && date.getFullYear() <= new Date().getFullYear() && date.getFullYear() > 1900) {
            input.classList.remove("input-error");
            input.classList.add("input-succes");
            fields[input.id] = true;
        }
        else {
            input.classList.add("input-error");
            input.classList.remove("input-succes");
            fields[input.id] = false;
        }
    }
}

const numberValidation = (input, value) => {
    if (value >= 1 && value < 100) {
        input.classList.remove("input-error");
        input.classList.add("input-succes");
        fields[input.id] = true;
    }
    else {
        input.classList.add("input-error");
        input.classList.remove("input-succes");
        fields[input.id] = false;
    }
}

const discountValidation = (input, value) => {
    console.log("discount");
    console.log(input);
    if (value && value >= 0 && value < 100) {
        input.classList.remove("input-error");
        input.classList.add("input-succes");
        fields[input.id] = true;
    }
    else {
        input.classList.add("input-error");
        input.classList.remove("input-succes");
        fields[input.id] = false;
    }
}


const priceValidation = (input, value) => {
    if (value >= 1000 && value <= 100000) {
        input.classList.remove("input-error");
        input.classList.add("input-succes");
        fields[input.id] = true;
    }
    else {
        input.classList.add("input-error");
        input.classList.remove("input-succes");
        fields[input.id] = false;
    }
}

const descriptionValidation = (input) => {
    console.log(input)
    console.log(input.value)
    if (input.value && input.value.length >= 5 && input.value.length <= 5000) {
        input.classList.remove("input-error");
        input.classList.add("input-succes");
        fields[input.id] = true;
    }
    else {
        input.classList.add("input-error");
        input.classList.remove("input-succes");
        fields[input.id] = false;
    }
}

const validation = (e) => {
    let element = document.getElementById(e.target.id)
    switch (e.target.id) {
        case "name":
            fieldValidation(expressions.name, element, e.target.value)
            break;
        case "precio":
            priceValidation(element, e.target.value)
            break;
        case "date":
            dateValidation(element, e.target.value)
            break;
        case "videoUrl":
            validURL(element, e.target.value)
            break;
        case "juagdores":
            numberValidation(element, e.target.value)
            break;
        case "discount":
            discountValidation(element, e.target.value)
            break;
        case "description":
            fieldValidation(expressions.description, element, e.target.value)
            break;
        case "desarrolladora":
            selectValidation(element, e.target.value)
            break;
        case "productora":
            selectValidation(element, e.target.value)
            break;
        case "idioma":
            selectValidation(element, e.target.value)
            break;
        case "category":
            selectValidation(element, e.target.value)
            break;
    }
};

inputs.forEach((i) => {
    i.addEventListener('keyup', validation)
    i.addEventListener('blur', validation)
    i.addEventListener('change', validation)
});

selects.forEach((s) => {
    s.addEventListener('change', validation)
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    descriptionValidation(textArea);

    if(!fields.image) {
        $imgPreview.classList.remove("input-succes");
        $imgPreview.classList.add("input-error");
        $selectImage.classList.remove("input-succes");
        $selectImage.classList.add("input-error");
    }
    else {
        $imgPreview.classList.remove("input-error");
        $imgPreview.classList.add("input-succes");
        $selectImage.classList.remove("input-error");
        $selectImage.classList.add("input-succes");
    }

    if(!fields.previews) {
        $selectGallery.classList.remove("input-succes");
        $selectGallery.classList.add("input-error");
        $galleryDetails.classList.remove("input-succes");
        $galleryDetails.classList.add("input-error");
    }
    else {
        $selectGallery.classList.remove("input-error");
        $selectGallery.classList.add("input-succes");
        $galleryDetails.classList.remove("input-error");
        $galleryDetails.classList.add("input-succes");
    }

    inputs.forEach((i) => {
        switch (i.id) {
            case "name":
                fieldValidation(expressions.name, i, i.value)
                break;
            case "precio":
                priceValidation(i, i.value)
                break;
            case "date":
                dateValidation(i, i.value)
                break;
            case "videoUrl":
                validURL(i, i.value)
                break;
            case "juagdores":
                numberValidation(i, i.value)
                break;
            case "discount":
                discountValidation(i, i.value)
                break;
        }
    })

    selects.forEach((s) => {
        switch (s.id) {
            case "desarrolladora":
                selectValidation(s, s.value)
                break;
            case "productora":
                selectValidation(s, s.value)
                break;
            case "idioma":
                selectValidation(s, s.value)
                break;
            case "category":
                selectValidation(s, s.value)
                break;
        }
    })

    if (fields.category && fields.date && fields.desarrolladora && fields.description && fields.description && fields.discount && fields.idioma && fields.image && fields.juagdores && fields.name && fields.precio && fields.previews && fields.productora) {
        console.log("----------------------------------pass----------------------------------------")
        form.submit();
    }
    else {
        console.log("----------------------------------not-pass----------------------------------------")
        console.log(fields);
        return;
    }
});