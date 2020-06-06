import { all, takeLatest } from 'redux-saga/effects';
import { Types as ToDosTypes } from './todos/actions';
import { getToDoSaga, putToDoSaga } from './todos/sagas';
import { Types as ToDosFinishTypes } from './todosFinish/actions';
import { getToDoFinishSaga, putToDoFinishSaga } from './todosFinish/sagas';

export default function* rootSaga() {
  yield all([
    takeLatest(ToDosTypes.GET_TODO, getToDoSaga),
    takeLatest(ToDosTypes.PUT_TODO, putToDoSaga),
    takeLatest(ToDosFinishTypes.GET_TODOFINISH, getToDoFinishSaga),
    takeLatest(ToDosFinishTypes.PUT_TODOFINISH, putToDoFinishSaga),
  ]);
}
