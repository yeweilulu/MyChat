import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterView from '@/router/RouterView'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    < RouterView />
  </React.StrictMode>
);



