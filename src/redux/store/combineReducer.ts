import {combineReducers} from 'redux';
import alertReducer from '../reducers/alertReducer';
import userReducer from '../reducers/userReducer';

const CombineReducers = combineReducers({
 User:userReducer,
 Alert:alertReducer
});
export default CombineReducers;
