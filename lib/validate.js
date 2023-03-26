export default function login_validate(values) {
	const errors = {};

	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}
	// validation for password

	if (!values.password) {
		errors.password = 'Required';
	} else if (values.password.length < 8 || values.password.length > 20) {
		errors.password = 'Must be at least 8 characters and at most 20 characters';
	} else if (values.password.includes(' ')) {
		errors.password = 'Invalid password';
	}

	return errors;
}

export function register_validate(values) {
	const errors = {};
	// username validation
	if (!values.username) {
		errors.username = 'Required';
	} else if (values.username.includes(' ')) {
		errors.username = 'Invalid username';
	}

	// Email validation
	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}
	// validation for password

	if (!values.password) {
		errors.password = 'Required';
	} else if (values.password.length < 8 || values.password.length > 20) {
		errors.password = 'Must be at least 8 characters and at most 20 characters';
	} else if (values.password.includes(' ')) {
		errors.password = 'Invalid password';
	}
	// validation for cpassword
	if (!values.cpassword) {
		errors.cpassword = 'Required';
	} else if (values.cpassword !== values.password) {
		errors.cpassword = 'Passwords do not match';
	}

	return errors;
}
