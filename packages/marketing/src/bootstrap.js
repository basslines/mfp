import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start the App
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// Development and Isolation
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// Export the Mount function to run it in Container
export { mount };
