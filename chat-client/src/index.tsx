import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'
import 'lib-flexible';
import RouterView from '@/router/RouterView'
import { Provider } from 'react-redux';
import store from './store/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    < RouterView />
  </Provider>
);



