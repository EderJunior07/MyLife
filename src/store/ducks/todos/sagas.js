import api from '~/services/api';
import { call, put } from 'redux-saga/effects';
import { getToDoSuccess, getToDoFailure, putToDoSuccess, putToDoFailure } from './actions';


export function* getToDoSaga({ payload }) {
  try {
    const response = yield call(api.get, `/todos/status/0`);
    console.log('GetToDo');
    yield put(getToDoSuccess(response));
  } catch (e) {
    console.log(e)
  }
}


export function* putToDoSaga({ payload }) {
  try {
    console.log('PutTodo');
    yield call(api.put, `/todos/${payload.id}`, {
      status: true
    });
    const response = yield call(api.get, '/todos/status/0');
    console.log('PutTodo');
    yield put(putToDoSuccess(response));
  } catch (e) {
    console.log(e)
  }
}

