// chakra
import { Spinner } from '@chakra-ui/react';
import './components/ChakraUI/spinner.css';
// toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Flip } from 'react-toastify';
// react
import React from 'react';
import { useSelector } from 'react-redux';
import { selectLoadingStatus } from 'redux/selectors';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'Pages/Layout/Layout';
// lazy pages
import Homepage from 'Pages/Homepage/Homepage';
import ContactInfo from 'Pages/Contacts/ContactsInfo/ContactInfo';

const Register = lazy(() => import('./Pages/Register/Register'));
const LogIn = lazy(() => import('./Pages/LogIn/LogIn'));
const Contacts = lazy(() => import('./Pages/Contacts/Contacts'));
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const isLoading = useSelector(selectLoadingStatus);
  return (
    <>
      <Routes>
        <Route path="/goit-react-hw-08-phonebook" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="register" element={<NotFoundPage />} />
          <Route path="login" element={<NotFoundPage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="contacts/:contactID" element={<ContactInfo />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        transition={Flip}
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {isLoading && (
        <Spinner
          color="#7e0039c2"
          size={'xl'}
          emptyColor="gray.200"
          speed="900ms"
        />
      )}
    </>
  );
};