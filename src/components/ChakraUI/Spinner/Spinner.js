import './spinner.css';
const { Spinner } = require('@chakra-ui/react');

function ChakraSpinner() {
  return (
    <Spinner
      color="#7e0039c2"
      size={'xl'}
      emptyColor="gray.200"
      speed="900ms"
    />
  );
}

export default ChakraSpinner;
