import './Homepage.css';
import TextFadeIn from 'components/Scripts/TextFadeIn';
import { Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Homepage = () => {
  const handleTextFinish = () => {
    document.querySelector('.join-link').style.opacity = 1;
    document.querySelector('.join-link').style.pointerEvents = 'all'
  };

  return (
    <main className="Homepage__hero">
      <section className="section title-section">
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
      </section>
    </main>
  );
};

export default Homepage;
