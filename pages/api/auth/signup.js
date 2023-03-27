import { hash } from 'bcryptjs';
import connectDatabase from './../../../database/connect';
import Users from './../../../models/Schema';
export default async function handler(req, res) {
	// connection to database
	connectDatabase();

	// checking if post request
	if (req.method === 'POST') {
		if (!req.body) {
			return res.status(404).json({ error: 'Dont have form data' });
		}

		const { username, email, password } = req.body;

		// Check the duplicate users
		const checkExisting = await Users.findOne({ email });
		if (checkExisting) {
			return res.status(422).json({ message: 'User already exists' });
		}
		// Create the user
		try {
			const user = await Users.create({
				email,
				username,
				password: await hash(password, 12),
			});
			return res.status(200).json({ success: true, data: user });
		} catch (error) {
			return res.status(500).json({ message: 'Error creating user' });
		}
	} else {
		res
			.status(404)
			.json({ message: 'HTTP method not valid, only POST allowed.' });
	}
}
