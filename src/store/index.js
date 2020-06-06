import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import Reactron from '~/config/ReactotronConfig';
import RNtron from 'reactotron-react-native';

const sagaMonitor = RNtron.createSagaMonitor();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), Reactron.createEnhancer()),
);

sagaMiddleware.run(rootSaga);

export default store;
