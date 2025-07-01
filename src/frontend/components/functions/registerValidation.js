
export const registerValidation = (values) => {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}/;

    if (values.name === "") {
        error.name = "Please enter your name";
    } else {
        error.name = "";
    }

    if (values.email === "") {
        error.email = "Please enter your email";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Please use a valid email";
    } else {
        error.email = "";
    }

    if (values.password === "") {
        error.password = "Please enter a password";
    } else if (!password_pattern.test(values.password)) {
        error.password = "The password must have at least an upper letter, one number and the min. size of 8";
    } else {
        error.password = "";
    }

    if (!values.acceptTerms) {
        error.acceptTerms = "Trebuie să accepți politica de confidențialitate.";
    }

    return error;
}