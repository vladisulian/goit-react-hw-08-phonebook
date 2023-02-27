// chakra
import { Spinner } from '@chakra-ui/react';
import './components/ChakraUI/spinner.css';
// react
import React from 'react';
import { useSelector } from 'react-redux';
import { getLoadingStatus } from 'redux/selectors';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'Pages/Layout/Layout';
// lazy pages
import Homepage from 'Pages/Homepage/Homepage';
const Register = lazy(() => import('./Pages/Register/Register'));
const LogIn = lazy(() => import('./Pages/LogIn/LogIn'));
const Contacts = lazy(() => import('./Pages/Contacts/Contacts'));
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const isLoading = useSelector(getLoadingStatus);
  return (
    <>
      <Routes>
        <Route path="/goit-react-hw-08-phonebook" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<LogIn />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      {isLoading && (
        <Spinner
          color="orange"
          size={'xl'}
          emptyColor="orangered"
          speed="900ms"
        />
      )}
    </>
  );
};
