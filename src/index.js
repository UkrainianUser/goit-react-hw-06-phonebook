import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provaider } from 'react-redux';
import App from 'components/App';
import { store } from 'redax/srore';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provaider store={store}>
      <App />
    </Provaider>
  </React.StrictMode>
);
