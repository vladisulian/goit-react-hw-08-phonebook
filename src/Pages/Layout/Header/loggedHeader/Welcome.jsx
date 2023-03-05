const { useSelector } = require('react-redux');
const { selectUserName } = require('redux/auth/auth-selectors');

const Welcome = () => {
  const username = useSelector(selectUserName);

  return (
    <div id="userlogged">
      <p>Welcome, {username}!</p>
    </div>
  );
};

export default Welcome;
