import {
	PRODUCT_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
	name: '',
	description: '',
	shift: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PRODUCT_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value };
		default:
			return state;
	}
};
