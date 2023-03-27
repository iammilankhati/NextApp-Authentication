import Link from 'next/link';
import { getSession } from 'next-auth/react';

export default () => {
	return (
		<section className='container mx-auto text-center'>
			<h3 className='text-4xl font-bold'>Profile Page</h3>

			<Link href='/'>HomePage</Link>
		</section>
	);
};

export async function getServerSideProps({ req }) {
	const session = await getSession({ req });
	if (!session) {
		return {
			redirect: {
				destination: '/login',
				permanent: false,
			},
		};
	}
	// authorized user return session
	return {
		props: { session },
	};
}
