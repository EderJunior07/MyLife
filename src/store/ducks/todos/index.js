import { Types } from './actions';

const INITIAL_STATE = {
  data: [],

  loading: false,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_TODO:
      return { ...state, loading: true, error: false };
    case Types.GET_TODO_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    case Types.GET_TODO_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload };
    case Types.PUT_TODO:
      return { ...state, loading: true, error: false };
    case Types.PUT_TODO_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    case Types.PUT_TODO_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload };
    default:
      return state;
  }
};
