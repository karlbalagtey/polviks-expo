import axios from 'axios';
import apiConfig from './config';

export const fetchApi = (endPoint, payload = {}, method = 'get', headers = {}) => {
	const accessToken = sessionSelectors.get().tokens.access.value;

	axios.defaults.baseUrl = apiConfig.baseUrl;
	axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;

	const options = {
		method: method,
		headers: headers,
		url: endPoint
	};

	return axios(options);
};
