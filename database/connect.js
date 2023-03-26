import mongoose from 'mongoose';

const connectDatabase = () => {
	mongoose
		.connect(process.env.DB_LOCAL_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then((con) => {
			console.log(`Server is listening on port ${con.connection.host}`);
		})
		.catch((err) => {
			console.log(err);
		});
};

export default connectDatabase;
