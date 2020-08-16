import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from './reducers';

// create s
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

// export store singleton instance
export default store;
