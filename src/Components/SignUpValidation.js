export default function Validations(newValues) {
    let errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (newValues.name.trim() === "") {
        errors.name = "Name should not be empty";
    } else {
        errors.name = "";
    }

    if (newValues.email.trim() === "") {
        errors.email = "Email should not be empty";
    } else if (!email_pattern.test(newValues.email)) {
        errors.email = "Invalid email format";
    } else {
        errors.email = "";
    }

    if (newValues.password.trim() === "") {
        errors.password = "Password should not be empty";
    } else if (!password_pattern.test(newValues.password)) {
        errors.password = "Invalid password format";
    } else {
        errors.password = "";
    }

    return errors;
}