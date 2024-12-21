import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:8000',
});

// Add a request interceptor
instance.interceptors.request.use(
	function (config) {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = 'Bearer ' + token;
		}
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default {
	get: instance.get,
	post: instance.post,
	patch: instance.patch,
	delete: instance.delete,
};
