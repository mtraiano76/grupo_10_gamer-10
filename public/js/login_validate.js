const expressions = {
    password: /^.{8,100}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const fields = {
    email: false,
    password: false,
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

const validation = (e) => {
    let input = document.getElementById(e.target.id)
    let expression;
    switch (e.target.id) {
        case "email":
            expression = expressions.email;
            break;
        case "password":
            expression = expressions.password;
            break;
    }
    fieldValidation(expression, input, e.target.value)
};

inputs.forEach((i) => {
    i.addEventListener('keyup', validation)
    i.addEventListener('blur', validation)
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (fields.email && fields.password) {
        form.submit();
    }
    else {

        inputs.forEach((i) => {
            if (i.id == 'email' || i.id == 'password') {
                let expression;
                switch (i.id) {
                    case "email":
                        expression = expressions.email;
                        break;
                    case "password":
                        expression = expressions.password;
                }
                fieldValidation(expression, i, i.value);
            }
        })
    }
});
