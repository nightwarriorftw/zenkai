import { combineReducers } from 'redux';
import CounterReducer from './counter';
import LoggedReducer from './isLogged';

const allReducer = combineReducers({
    counter: CounterReducer,
    logged: LoggedReducer,
});

export default allReducer;
