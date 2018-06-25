import {
	PRODUCT_UPDATE
} from './types';

export const productUpdate = ({ prop, value }) => {
	return {
		type: PRODUCT_UPDATE,
		payload: { prop, value }
	};
};
