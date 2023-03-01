import './Layout.css';

import { Outlet } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Header } from './Header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <Spinner
            color="#7e0039c2"
            size={'xl'}
            emptyColor="gray.200"
            speed="900ms"
          />
        }
      >
       
        <Outlet />
      </Suspense>
    </>
  );
};
