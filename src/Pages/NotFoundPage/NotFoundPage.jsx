import './NotFoundPage.css';
import { RiCodeSFill, RiCodeSSlashLine } from 'react-icons/ri';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/goit-react-hw-08-phonebook');
    }, 5000);
  }, [navigate]);

  return (
    <div className="notFoundPage">
      <p>
        <RiCodeSFill />
        This page is not found or still not created...
      </p>
      <p>
        You will be redirected to homepage in 5 seconds
        <RiCodeSSlashLine />
      </p>
    </div>
  );
};

export default NotFoundPage;
