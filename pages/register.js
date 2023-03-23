import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from './../layout/layout';
import styles from '@/styles/Form.module.css';
import Image from 'next/image';
import { HiFingerPrint, HiAtSymbol, HiOutlineUser } from 'react-icons/hi';

export default function Register() {
	const [show, setShow] = useState({ password: false, cpassword: false });
	return (
		<>
			<Head>
				<title>Register</title>
			</Head>
			<Layout>
				<section className='w-3/4 py-10 mx-auto flex flex-col gap-10'>
					<div className='title'>
						<h1 className='text-gray-800 text-4xl font-bold py-4'>Register</h1>
						<p className='w-3/4 mx-auto text-gray-400'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Veritatis, atque!
						</p>
					</div>
					<form className='flex flex-col gap-5'>
						<div className={styles.input_group}>
							<input
								type='text'
								name='username'
								id='username'
								placeholder='Username'
								className={styles.input_text}
							/>

							<span className='icon flex items-center px-4'>
								<HiOutlineUser size={24} />
							</span>
						</div>
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
								type={`${show.password ? 'text' : 'password'}`}
								name='password'
								id='password'
								placeholder='Password'
								className={styles.input_text}
							/>

							<span
								className='icon flex items-center px-4'
								onClick={() => setShow({ ...show, password: !show.password })}
							>
								<HiFingerPrint size={24} />
							</span>
						</div>
						<div className={styles.input_group}>
							<input
								type={`${show.cpassword ? 'text' : 'password'}`}
								name='cpassword'
								id='cpassword'
								placeholder='Confirm Password'
								className={styles.input_text}
							/>

							<span
								className='icon flex items-center px-4'
								onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
							>
								<HiFingerPrint size={24} />
							</span>
						</div>
						{/* login buttons */}
						<div className={styles.button}>
							<button type='submit'>Register</button>
						</div>
					</form>
					{/* bottom */}

					<p className='text-center text-gray-400'>
						{' '}
						Already Have An Account ?{' '}
						<Link href='/login' className='text-blue-700'>
							{' '}
							Sign In
						</Link>
					</p>
				</section>
			</Layout>
		</>
	);
}
