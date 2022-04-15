/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Provider} from 'react-native-paper';
import App from './App';
import ReactDOM from 'react-dom';
import {name as appName} from './app.json';
import createStore from './module/store';
const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
