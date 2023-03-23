import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from './../layout/layout';
import styles from '@/styles/Form.module.css';
import Image from 'next/image';
import { HiFingerPrint, HiAtSymbol } from 'react-icons/hi';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Login() {
	const [show, setShow] = useState(false);

	async function handleGoogleSignin() {
		signIn('google', { callbackUrl: 'http://localhost:3000' });
	}
	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<Layout>
				<section className='w-3/4 py-10 mx-auto flex flex-col gap-10'>
					<div className='title'>
						<h1 className='text-gray-800 text-4xl font-bold py-4'>Explore</h1>
						<p className='w-3/4 mx-auto text-gray-400'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Veritatis, atque!
						</p>
					</div>
					<form className='flex flex-col gap-5'>
						<div className={styles.input_group}>
							<input
								type='email'
								name='email'
								id='email'
								placeholder='Email'
								className={styles.input_text}
							/>

							<span className='icon flex items-center px-4'>
								<HiAtSymbol size={24} />
							</span>
						</div>
						<div className={styles.input_group}>
							<input
								type={`${show ? 'text' : 'password'}`}
								name='password'
								id='password'
								placeholder='password'
								className={styles.input_text}
							/>

							<span
								className='icon flex items-center px-4'
								onClick={() => setShow(!show)}
							>
								<HiFingerPrint size={24} />
							</span>
						</div>
						{/* login buttons */}
						<div className={styles.button}>
							<button type='submit'>Login</button>
						</div>
						<div className='input-button'>
							<button
								type='button'
								className={styles.button__custom}
								onClick={handleGoogleSignin}
							>
								Sign In with Google{' '}
								<Image src='/assets/google.svg' width={20} height={20}></Image>
							</button>
						</div>
						<div className='input-group'>
							<button type='button' className={styles.button__custom}>
								Sign In with Github{' '}
								<Image src='/assets/github.svg' width={20} height={20}></Image>
							</button>
						</div>
					</form>
					{/* bottom */}

					<p className='text-center text-gray-400'>
						{' '}
						don't have a account yet ?{' '}
						<Link href='/register' className='text-blue-700'>
							{' '}
							Sign Up
						</Link>
					</p>
				</section>
			</Layout>
		</>
	);
}
