import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  interface ConfirmEditModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (editedData: any) => void;
    initialData: any;
  }
  
  const ConfirmEditModal: React.FC<ConfirmEditModalProps> = ({ isOpen, onClose, onConfirm, initialData }) => {
    const [editedData, setEditedData] = useState(initialData);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setEditedData((prevData:any) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleConfirm = () => {
      onConfirm(editedData);
    };
  
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <FormControl>
              <FormLabel>Title</FormLabel>
              <Input name="title" value={editedData.title} onChange={handleChange} />
            </FormControl> */}
            {/* Add other form controls as needed for editing */}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleConfirm}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default ConfirmEditModal;
  