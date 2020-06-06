export const Types = {
  GET_TODOFINISH: 'todosfinish/GET_TODOFINISH',
  GET_TODOFINISH_FAILURE: 'todosfinish/GET_TODOFINISH_FAILURE',
  GET_TODOFINISH_SUCCESS: 'todosfinish/GET_TODOFINISH_SUCCESS',
  PUT_TODOFINISH: 'todosfinish/PUT_TODOFINISH',
  PUT_TODOFINISH_FAILURE: 'todosfinish/PUT_TODOFINISH_FAILURE',
  PUT_TODOFINISH_SUCCESS: 'todosfinish/PUT_TODOFINISH_SUCCESS',
};


export const getToDoFinish = (date) => {
  return {
    type: Types.GET_TODOFINISH,
    payload: date,
  };
};

export const getToDoFinishFailure = (e) => {
  return {
    type: Types.GET_TODOFINISH_FAILURE,
    payload: e,
  };
};

export const getToDoFinishSuccess = (todosfinish) => {
  return {
    type: Types.GET_TODOFINISH_SUCCESS,
    payload: todosfinish,
  };
};

// put

export const putToDoFinish = (date) => {
  return {
    type: Types.PUT_TODOFINISH,
    payload: date,
  };
};

export const putToDoFinishFailure = (e) => {
  return {
    type: Types.PUT_TODOFINISH_FAILURE,
    payload: e,
  };
};

export const putToDoFinishSuccess = (todosfinish) => {
  return {
    type: Types.PUT_TODOFINISH_SUCCESS,
    payload: todosfinish,
  };
};
