import 'react-toastify/dist/ReactToastify.css';
const { ToastContainer, Flip } = require('react-toastify');

function ToastContainerFunc() {
  return (
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
  );
}

export default ToastContainerFunc;
