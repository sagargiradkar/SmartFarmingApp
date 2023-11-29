// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
