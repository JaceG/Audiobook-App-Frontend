import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { routes } from '../../constants/api';
import request from '../../request';

// image
import logo from '../../assets/images/logo-full.png';
import Loader from '../../components/Loader';

function ForgotPassword() {
	const [email, setEmail] = useState('');
	let errorsObj = { email: '' };
	const [errors, setErrors] = useState(errorsObj);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	function onForgotPassword(e) {
		e.preventDefault();
		let error = false;
		const errorObj = { ...errorsObj };
		if (email?.trim() === '') {
			errorObj.email = 'Email is Required';
			error = true;
		}
		setErrors(errorObj);
		if (error) return;
		handleForgotPassword();
	}

	async function handleForgotPassword() {
		setLoading(true);
		try {
			const result = await request.post(routes.FORGOT_PASSWORD, {
				email,
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
												Forgot Password
											</h4>
											<form onSubmit={onForgotPassword}>
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
												<div className='text-center mt-4'>
													<button
														type='submit'
														className='btn btn-primary btn-block'>
														Submit
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

export default ForgotPassword;
