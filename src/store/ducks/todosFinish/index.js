import { Types } from './actions';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_TODOFINISH:
      return { ...state, loading: true, error: false };
    case Types.GET_TODOFINISH_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    case Types.GET_TODOFINISH_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload };
    case Types.PUT_TODOFINISH:
      return { ...state, loading: true, error: false };
    case Types.PUT_TODOFINISH_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    case Types.PUT_TODOFINISH_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload };
    default:
      return state;
  }
};
