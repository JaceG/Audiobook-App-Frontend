import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { routes } from '../../constants/api';
import request from '../../request';
import Loader from '../../components/Loader';

function ResetPassword() {
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [oldPassword, setOldPassword] = useState('');
	let errorsObj = { password: '' };
	const [errors, setErrors] = useState(errorsObj);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const params = useParams();

	function onChangePassword(e) {
		e.preventDefault();
		let error = false;
		const errorObj = { ...errorsObj };
		if (password === '') {
			errorObj.password = 'Password is Required';
			error = true;
		}
		if (oldPassword === '') {
			errorObj.password = 'Password is Required';
			error = true;
		}
		if (password !== confirmPassword) {
			errorObj.confirmPassword = 'Passwords do not match';
			error = true;
		}
		setErrors(errorObj);
		if (error) return;
		handleChangePassword();
	}

	async function handleChangePassword() {
		setLoading(true);
		try {
			const result = await request.post(routes.CHANGE_PASSWORD, {
				oldPassword,
				password,
				confirmPassword,
			});
			setLoading(false);
			if (result.data) {
				toast.success(result.data.message, {
					position: 'top-center',
				});
				navigate('/dashboard');
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
			<div className='page-title flex-wrap'>
				<div className='row no-gutters w-50'>
					<div className='col-xl-12'>
						<div className='auth-form'>
							<form onSubmit={onChangePassword}>
								<div className='form-group mb-3'>
									<label className='mb-1 '>
										<strong>Old Password</strong>
										<span className='required'>*</span>
									</label>
									<input
										defaultValue={oldPassword}
										onChange={(e) =>
											setOldPassword(e.target.value)
										}
										className='form-control'
										placeholder='old password'
										type='password'
									/>
								</div>
								{errors.oldPassword && (
									<div>{errors.oldPassword}</div>
								)}
								<div className='form-group mb-3'>
									<label className='mb-1 '>
										<strong>New Password</strong>
										<span className='required'>*</span>
									</label>
									<input
										defaultValue={password}
										onChange={(e) =>
											setPassword(e.target.value)
										}
										className='form-control'
										placeholder='new password'
										type='password'
									/>
								</div>
								{errors.password && (
									<div>{errors.password}</div>
								)}
								<div className='form-group mb-3'>
									<label className='mb-1 '>
										<strong>Confirm Password</strong>
										<span className='required'>*</span>
									</label>
									<input
										defaultValue={confirmPassword}
										onChange={(e) =>
											setConfirmPassword(e.target.value)
										}
										className='form-control'
										placeholder='confirm password'
										type='password'
									/>
								</div>
								{errors.confirmPassword && (
									<div>{errors.confirmPassword}</div>
								)}
								<div className='text-left mt-4'>
									<button
										type='submit'
										className='btn btn-primary'>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ResetPassword;
