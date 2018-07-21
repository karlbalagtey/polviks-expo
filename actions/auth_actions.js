import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import axios from 'axios';
import config from '../components/services/config';
import {
	FACEBOOK_LOGIN_SUCCESS,
	FACEBOOK_LOGIN_FAIL,
	POLVIKS_LOGIN_SUCCESS,
	POLVIKS_LOGIN_FAIL,
	USER_LOGIN_SUCCESS,
	RESET_ERROR_MESSAGE
} from './types';

state = {
	username: '',
	password: ''
};

export const facebookLogin = () => async (dispatch) => {
	let token = await AsyncStorage.getItem('fb_token');

	if (token) {
		// Dispatch an action saying FB login is done
		dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
	} else {
		// Start up FB login process
		doFacebookLogin(dispatch);
	}
};

const doFacebookLogin = async (dispatch) => {
	let { type, token } = await Facebook.logInWithReadPermissionsAsync(config.fbAppId, {
		permissions: ['public_profile']
	});

	if (type === 'cancel') {
		return dispatch({ type: FACEBOOK_LOGIN_FAIL });
	}

	await AsyncStorage.setItem('fb_token', token);
	dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};

export const polviksLogin = (state) => async (dispatch) => {
	let token = await AsyncStorage.getItem('access_token');

	if (token) {
		dispatch({ type: POLVIKS_LOGIN_SUCCESS, payload: token });
	} else {
		doPolviksLogin(state, dispatch);
	}
};

const doPolviksLogin = async (state, dispatch) => {
	const grantType = 'password',
		  providers = 'customers';

	axios.post(config.tokenUrl, {
		client_id: config.clientId,
		client_secret: config.clientSecret,
		grant_type: grantType,
		username: state.username,
		password: state.password,
		provider: providers
	})
	.then((res) => {
		AsyncStorage.setItem('access_token', res.data.access_token);
		dispatch({ type: POLVIKS_LOGIN_SUCCESS, payload: res.data.access_token });
	})
	.catch((error) => {
		return dispatch({ type: POLVIKS_LOGIN_FAIL, payload: error.response.data.message });
	});
};

export const userLogout = () => (dispatch) => {
	AsyncStorage.removeItem('access_token');
	AsyncStorage.removeItem('token');

	dispatch({ type: USER_LOGIN_SUCCESS });
};

export const resetError = () => (dispatch) => {
	dispatch({ type: RESET_ERROR_MESSAGE });
};
