import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename="test-task">
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </ThemeProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
