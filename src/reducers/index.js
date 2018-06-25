import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProductFormReducer from './ProductFormReducer';

export default combineReducers({
	auth: AuthReducer,
	productForm: ProductFormReducer
});
