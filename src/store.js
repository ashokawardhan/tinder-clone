import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore({}, composeEnhancers(applyMiddleware(ReduxThunk)));
