import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import greetingsReducer from './greetings/greetings';

const reducer = combineReducers({
  greetingsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
