import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

// if (DEV) {
const tron = Reactotron.configure({ name: 'ToDo' })
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect();

tron.clear();

export default tron;