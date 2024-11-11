import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { routes } from '../../constants/api';
import request from '../../request';

// image
import logo from '../../assets/images/logo-full.png';
import Loader from '../../components/Loader';

function Register(props) {
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [fullName, setFullName] = useState('');
	let errorsObj = { email: '', password: '' };
	const [errors, setErrors] = useState(errorsObj);
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	function onSignUp(e) {
		e.preventDefault();
		let error = false;
		const errorObj = { ...errorsObj };
		if (email?.trim() === '') {
			errorObj.email = 'Email is Required';
			error = true;
		}
		if (fullName?.trim() === '') {
			errorObj.fullName = 'Name is Required';
			error = true;
		}
		if (password === '') {
			errorObj.password = 'Password is Required';
			error = true;
		}
		if (!errorObj.phone && !/^\d{10,10}$/.test(phone)) {
			errorObj.phone = 'Invalid phone number.';
			error = true;
		}
		setErrors(errorObj);
		if (error) return;
		handleSignup();
	}

	async function handleSignup() {
		setLoading(true);

		try {
			const result = await request.post(routes.REGISTER, {
				email,
				password,
				name: fullName,
				phone,
			});
			setLoading(false);

			if (result.data) {
				toast.success(result.data.message, {
					position: 'top-center',
				});
				navigate('/login');
			}
		} catch (e) {
			setLoading(false);

			toast.error(
				e?.response?.data?.error ||
					'Unable to complete request try again later',
				{
					position: 'top-center',
				}
			);
		}
	}

	return (
		<>
			{loading && <Loader />}
			<div className='authincation h-100 p-meddle'>
				<div className='container h-100'>
					<div className='row justify-content-center h-100 align-items-center'>
						<div className='col-md-6'>
							<div className='authincation-content'>
								<div className='row no-gutters'>
									<div className='col-xl-12'>
										<div className='auth-form'>
											<div className='text-center mb-3'>
												<Link to='/login'>
													<img src={logo} alt='' />
												</Link>
											</div>
											<h4 className='text-center mb-4 '>
												Sign up your account
											</h4>
											{props.errorMessage && (
												<div className=''>
													{props.errorMessage}
												</div>
											)}
											{props.successMessage && (
												<div className=''>
													{props.successMessage}
												</div>
											)}
											<form onSubmit={onSignUp}>
												<div className='form-group mb-3'>
													<label className='mb-1 '>
														<strong>
															Full Name
														</strong>
														<span className='required'>
															*
														</span>
													</label>
													<input
														type='text'
														onChange={(e) =>
															setFullName(
																e.target.value
															)
														}
														className='form-control'
														placeholder='full name'
													/>
													{errors.fullName && (
														<div>
															{errors.fullName}
														</div>
													)}
												</div>
												<div className='form-group mb-3'>
													<label className='mb-1 '>
														<strong>Email</strong>
														<span className='required'>
															*
														</span>
													</label>
													<input
														defaultValue={email}
														onChange={(e) =>
															setEmail(
																e.target.value
															)
														}
														className='form-control'
														placeholder='email'
													/>
												</div>
												{errors.email && (
													<div>{errors.email}</div>
												)}
												<div className='form-group mb-3'>
													<label className='mb-1 '>
														<strong>Phone</strong>
														<span className='required'>
															*
														</span>
													</label>
													<input
														defaultValue={phone}
														onChange={(e) =>
															setPhone(
																e.target.value
															)
														}
														className='form-control'
														placeholder='phone'
													/>
												</div>
												{errors.phone && (
													<div>{errors.phone}</div>
												)}

												<div className='form-group mb-3'>
													<label className='mb-1 '>
														<strong>
															Password
														</strong>
														<span className='required'>
															*
														</span>
													</label>
													<input
														defaultValue={password}
														onChange={(e) =>
															setPassword(
																e.target.value
															)
														}
														className='form-control'
														placeholder='password'
														//defaultValue="Password"
													/>
												</div>
												{errors.password && (
													<div>{errors.password}</div>
												)}
												<div className='text-center mt-4'>
													<button
														type='submit'
														className='btn btn-primary btn-block'>
														Sign me up
													</button>
												</div>
											</form>
											<div className='new-account mt-3'>
												<p className=''>
													Already have an account?{' '}
													<Link
														className='text-primary'
														to='/login'>
														Sign in
													</Link>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Register;
