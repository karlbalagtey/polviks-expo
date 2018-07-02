import { 
	FACEBOOK_LOGIN_SUCCESS,
	FACEBOOK_LOGIN_FAIL,
	POLVIKS_LOGIN_SUCCESS,
	POLVIKS_LOGIN_FAIL,
	RESET_ERROR_MESSAGE
} from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case FACEBOOK_LOGIN_SUCCESS:
			return { token: action.payload };
		case FACEBOOK_LOGIN_FAIL:
			return { token: null };
		case POLVIKS_LOGIN_SUCCESS:
			return { token: action.payload };
		case POLVIKS_LOGIN_FAIL:
			return { token: null, error: action.payload };
		case RESET_ERROR_MESSAGE:
			return { token: null, error: null };
		default:
			return state;
	}
};
