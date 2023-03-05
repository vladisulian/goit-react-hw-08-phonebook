import './Homepage.css';
import TextFadeIn from 'components/Scripts/TextFadeIn';
import { Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn, selectUserName } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const Homepage = () => {
  const isLogged = useSelector(selectIsLoggedIn);
  const username = useSelector(selectUserName);


  const handleTextFinish = () => {
    document.querySelector('.join-link').style.opacity = 1;
    document.querySelector('.join-link').style.pointerEvents = 'all';
  };

  return (
    <main className="Homepage__hero">
      <section className="section title-section">
        {!isLogged ? (
          <>
            <TextFadeIn
              text="GoIT React phonebook - Modern phonebook!"
              speed={70}
              onFinish={handleTextFinish}
              className="Homepage-title"
            />
            <NavLink
              to={'registration'}
              style={{ opacity: 0, pointerEvents: 'none' }}
              className="join-link"
            >
              <Button
                colorScheme="teal"
                height="100px"
                width="200px"
                border="2px"
                borderColor="green.500"
                fontSize={'32px'}
                variant="ghost"
                className="chakra-button"
                size={'xl'}
              >
                Try it!
              </Button>
            </NavLink>
          </>
        ) : (
          <TextFadeIn
            text={`Welcome, dear ${username}! Now you can manage your contacts! `}
            speed={70}
            className="Homepage-title logged"
          />
        )}
      </section>
    </main>
  );
};

export default Homepage;
