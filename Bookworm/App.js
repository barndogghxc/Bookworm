import React from 'react';
import style from './style';
import RootNavigator from './nav/RootNavigator';
import reducers from './redux/reducers';
import { View, Text } from 'react-native';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducers, middleware);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator/>
      </Provider>
  }
}


