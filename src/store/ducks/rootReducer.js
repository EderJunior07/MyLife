import { combineReducers } from 'redux';
import todos from './todos';
import todosfinish from './todosFinish'

const reducers = combineReducers({
  todos,
  todosfinish,
});

export default reducers;