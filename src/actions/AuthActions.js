import axios from 'axios';
import SInfo from 'react-native-sensitive-info';
import { Actions } from 'react-native-router-flux';
import apiConfig from '../components/services/api/config';
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_FAILED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
		dispatch({ type: LOGIN_USER });

        axios.post(apiConfig.tokenUrl, {
            username: email,
            password: password,
            grant_type: 'password',
            client_id: apiConfig.clientId,
            client_secret: apiConfig.clientSecret,
            provider: 'customers'
        })
        .then(response => loginUserSuccess(dispatch, response))
        .catch(error => loginUserFailed(dispatch, error));
    };
};

const loginUserSuccess = (dispatch, response) => {
    SInfo.setItem('accessToken', response.data.access_token, {
        sharedPreferencesName: 'mySharedPrefs',
        keychainService: 'myKeychain'
    });

    SInfo.setItem('authenticated', 'true', {});

	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: response
	});

	Actions.main();
};

const loginUserFailed = (dispatch, error) => {
	dispatch({
		type: LOGIN_USER_FAILED,
		payload: error.response.data.message
	});
};
