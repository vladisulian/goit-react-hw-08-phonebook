import './NotFoundPage.css';
import { RiCodeSFill, RiCodeSSlashLine } from 'react-icons/ri';
const NotFoundPage = () => {
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
