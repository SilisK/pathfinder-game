export default function Validation(values) {
    let errors = {}; // Changed variable name to plural 'errors'
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (values.email.trim() === "") {
        errors.email = "Email should not be empty"; // Fixed error message
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Invalid email format";
    } else {
        errors.email = "";
    }

    if (values.password.trim() === "") {
        errors.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Invalid password format";
    } else {
        errors.password = "";
    }

    return errors; 
}