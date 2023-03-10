import ToastContainerFunc from 'components/ReactToastify/ToastContainer'; // toast
import ChakraSpinner from 'components/ChakraUI/Spinner/Spinner'; // spinner

import React, { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing, selectLoadingStatus } from 'redux/selectors';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'Pages/Layout/Layout';

import Homepage from 'Pages/Homepage/Homepage';
import ContactInfo from 'Pages/Contacts/ContactsInfo/ContactInfo';
import PrivateRoute from 'Routes/PrivateRoute';
import { RestrictedRoute } from 'Routes/RestrictedRoute';
import { refreshUser } from 'redux/auth/auth-operations';

const Registration = lazy(() =>
  import('./Pages/Auth/Registration/Registration')
);
const LogIn = lazy(() => import('./Pages/Auth/LogIn/LogIn'));
const Contacts = lazy(() => import('./Pages/Contacts/Contacts'));
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoadingStatus);
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <ChakraSpinner />
  ) : (
    <>
      <Routes>
        <Route path="/goit-react-hw-08-phonebook" element={<Layout />}>
          <Route index element={<Homepage />} />

          <Route
            path="registration"
            element={
              <RestrictedRoute
                redirectTo="/goit-react-hw-08-phonebook/contacts"
                component={<Registration />}
              />
            }
          />

          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/goit-react-hw-08-phonebook/contacts"
                component={<LogIn />}
              />
            }
          />

          <Route
            path="contacts"
            element={
              <PrivateRoute
                redirectTo="/goit-react-hw-08-phonebook/registration"
                component={<Contacts />}
              />
            }
          />

          <Route
            path="contacts/:contactID"
            element={
              <PrivateRoute
                redirectTo="/goit-react-hw-08-phonebook/registration"
                component={<ContactInfo />}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      {/*  */}

      <ToastContainerFunc />
      {isLoading && <ChakraSpinner />}
    </>
  );
};
