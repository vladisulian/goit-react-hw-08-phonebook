import './index.css';
// react
import React from 'react';
import ReactDOM from 'react-dom/client';
// ? redux
import { Provider } from 'react-redux';
import { store } from 'redux/store';
// components
import { App } from 'components/App';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
