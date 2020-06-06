import api from '~/services/api';
import { call, put } from 'redux-saga/effects';
import { getToDoFinishSuccess, putToDoFinishSuccess, } from './actions';


export function* getToDoFinishSaga({ payload }) {
  try {
    const response = yield call(api.get, '/todos/status/1');
    console.log('GetToDoFinish');
    yield put(getToDoFinishSuccess(response));
  } catch (e) {
    console.log(e)
  }
}

export function* putToDoFinishSaga({ payload }) {
  try {
    console.log('PutTodo');
    yield call(api.put, `/todos/${payload.id}`, {
      status: true
    });
    const response = yield call(api.get, '/todos/status/0');
    console.log('PutTodo');
    yield put(putToDoFinishSuccess(response));
  } catch (e) {
    console.log(e)
  }
}
