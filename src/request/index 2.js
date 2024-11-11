import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:8000',
});

export default {
	get: instance.get,
	post: instance.post,
	patch: instance.patch,
	delete: instance.delete,
};
