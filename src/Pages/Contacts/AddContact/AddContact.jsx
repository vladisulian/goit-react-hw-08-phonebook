import styled from 'styled-components';
import './AddContact.css';
const {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} = require('@chakra-ui/react');
const { useRef } = require('react');

const AddContactContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: black;
`;

export const AddContact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <AddContactContainer>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        style={{ background: 'black !important', borderRadius: '20px' }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add to contacts</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Second name</FormLabel>
              <Input ref={initialRef} placeholder="Second name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent={'center'}>
            <Button colorScheme="blue" mr={3} w={150}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </AddContactContainer>
  );
};
