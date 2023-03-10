import './index.css';
// react
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// ? redux
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
// components
import { App } from 'App';
import { ChakraProvider, Spinner } from '@chakra-ui/react';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate
          loading={
            <Spinner
              color="#7e0039c2"
              size={'xl'}
              emptyColor="gray.200"
              speed="900ms"
            />
          }
          persistor={persistor}
        >
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
