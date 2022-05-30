const expressions = {
    password: /^.{8,100}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    name: /^[a-zA-ZÀ-ÿ\s]{5,40}$/,
}

const fields = {
    name: false,
    lastname: false,
    email: false,
    emailconfirmation: false,
    password: false,
    passwordconfirm: false,
}

const form = document.querySelector('form');
const inputs = document.querySelectorAll('form input');

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

const compare = (input, compareValue) => {
    if (input.value && input.value == compareValue.value) {
        input.classList.remove("input-error");
        input.classList.add("input-succes");
        fields[input.id] = true;
    }
    else {
        input.classList.add("input-error");
        input.classList.remove("input-succes");
        fields[input.id] = false;
    }
};

const validation = (e) => {
    let input = document.getElementById(e.target.id)
    switch (e.target.id) {
        case "name":
            fieldValidation(expressions.name, input, e.target.value)
            break;
        case "lastname":
            fieldValidation(expressions.name, input, e.target.value)
            break;
        case "email":
            fieldValidation(expressions.email, input, e.target.value)
            break;
        case "emailconfirmation":
            compare(input, document.getElementById('email'))
            break;
        case "password":
            fieldValidation(expressions.password, input, e.target.value)
            break;
        case "passwordconfirm":
            compare(input, document.getElementById('password'))
            break;
    }
};

inputs.forEach((i) => {
    i.addEventListener('keyup', validation)
    i.addEventListener('blur', validation)
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (fields.name && fields.lastname && fields.email && fields.emailconfirmation && fields.password && fields.passwordconfirm) {
        form.submit();
    }
    else {
        inputs.forEach((i) => {
            if (i.id == 'name' || i.id == 'lastname' || i.id == 'email' || i.id == 'emailconfirmation' || i.id == 'password' || i.id == 'passwordconfirm') {
                switch (i.id) {
                    case "name":
                        fieldValidation(expressions.name, i, e.target.value)
                        break;
                    case "lastname":
                        fieldValidation(expressions.name, i, e.target.value)
                        break;
                    case "email":
                        fieldValidation(expressions.email, i, e.target.value)
                        break;
                    case "emailconfirmation":
                        compare(i, document.getElementById('email'))
                        break;
                    case "password":
                        fieldValidation(expressions.password, i, e.target.value)
                        break;
                    case "passwordconfirm":
                        compare(i, document.getElementById('password'))
                        break;
                }
            }
        })
    }
});
