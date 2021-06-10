import Axios from 'axios';

export const API = 'http://localhost/api';

const getRequest = async (path) => {
	return await Axios.get(`${API}/${path}`);
};

const postRequest = async (path, payload) => {
	return await Axios.post(`${API}/${path}`, payload);
};

export const GetPainting = () => {
	const path = 'getPainting';
	return getRequest(path);
};

export const Search = (payload) => {
	const path = 'search';
	return postRequest(path, payload);
};