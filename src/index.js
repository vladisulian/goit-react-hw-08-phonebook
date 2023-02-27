import './index.css';
// react
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// ? redux
import { Provider } from 'react-redux';
import { store } from 'redux/store';
// components
import { App } from 'App';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
