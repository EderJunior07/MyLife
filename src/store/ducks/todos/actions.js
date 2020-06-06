export const Types = {
  GET_TODO: 'todos/GET_TODO',
  GET_TODO_FAILURE: 'todos/GET_TODO_FAILURE',
  GET_TODO_SUCCESS: 'todos/GET_TODO_SUCCESS',
  PUT_TODO: 'todos/PUT_TODO',
  PUT_TODO_FAILURE: 'todos/PUT_TODO_FAILURE',
  PUT_TODO_SUCCESS: 'todos/PUT_TODO_SUCCESS',
};


export const getToDo = (date) => {
  return {
    type: Types.GET_TODO,
    payload: date,
  };
};

export const getToDoFailure = (e) => {
  return {
    type: Types.GET_TODO_FAILURE,
    payload: e,
  };
};

export const getToDoSuccess = (todos) => {
  return {
    type: Types.GET_TODO_SUCCESS,
    payload: todos,
  };
};


// put

export const putToDo = (date) => {
  return {
    type: Types.PUT_TODO,
    payload: date,
  };
};

export const putToDoFailure = (e) => {
  return {
    type: Types.PUT_TODO_FAILURE,
    payload: e,
  };
};

export const putToDoSuccess = (todos) => {
  return {
    type: Types.PUT_TODO_SUCCESS,
    payload: todos,
  };
};
