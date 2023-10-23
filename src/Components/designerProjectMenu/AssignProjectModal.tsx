import React, { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

type Designer = {
  projectId: number;
  designerId: number;
  totalEarnings: number;
  comment: string;
  dueDate: string;
  paymentDueDate: string;
  customerRating: number;
  activeDays: string;
};

type UserModalProps = {
  onSave: (user: Designer) => void;
  isOpen: boolean;
  onClose: () => void;
  editUser: Designer | null;
};

const AssignProjectModal: React.FC<UserModalProps> = ({
  onSave,
  isOpen,
  onClose,
  editUser,
}: UserModalProps) => {
  const [formData, setFormData] = useState<Designer>({
    projectId: 0,
    designerId: 0,
    totalEarnings: 0, // New field
    comment: '',
    dueDate: '', // Use strings for date fields
    paymentDueDate: '', // Use strings for date fields
    customerRating: 0, // New field
    activeDays: '', // New field
  });

  useEffect(() => {
    if (isOpen && editUser) {
      setFormData(editUser);
    } else {
      resetForm();
    }
  }, [isOpen, editUser]);

  const resetForm = () => {
    setFormData({
      projectId: 0,
      designerId: 0,
      totalEarnings: 0, // New field
      comment: '',
      dueDate: '', // Use strings for date fields
      paymentDueDate: '', // Use strings for date fields
      customerRating: 0, // New field
      activeDays: '', // New field
    });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {editUser ? 'Edit User' : 'Create User'}
            <IconButton
              aria-label="Close"
              icon={<CloseIcon />}
              onClick={onClose}
              position="absolute"
              right="0.5rem"
              top="0.5rem"
            />
          </ModalHeader>
          <ModalBody>
            <FormControl mt={4}>
              <FormLabel>Designer ID</FormLabel>
              <Input
                type="number"
                name="designerId"
                value={formData.designerId || ''}
                onChange={handleChange}
                placeholder="Enter Designer ID"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Project ID</FormLabel>
              <Input
                type="number"
                name="projectId"
                value={formData.projectId || ''}
                onChange={handleChange}
                placeholder="Enter Project ID"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Total Earnings</FormLabel>
              <Input
                type="number"
                name="totalEarnings"
                value={formData.totalEarnings || ''}
                onChange={handleChange}
                placeholder="Enter Total Earnings"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Due Date</FormLabel>
              <Input
                type="date"
                name="dueDate"
                value={formData.dueDate || ''}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Payment Due Date</FormLabel>
              <Input
                type="date"
                name="paymentDueDate"
                value={formData.paymentDueDate || ''}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Comment</FormLabel>
              <Input
                type="text"
                name="comment"
                value={formData.comment || ''}
                onChange={handleChange}
                placeholder="Enter Comment"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Customer Rating</FormLabel>
              <Input
                type="number"
                name="customerRating"
                value={formData.customerRating || ''}
                onChange={handleChange}
                placeholder="Enter Customer Rating"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Active Days</FormLabel>
              <Input
                type="text"
                name="activeDays"
                value={formData.activeDays || ''}
                onChange={handleChange}
                placeholder="Enter Active Days"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AssignProjectModal;
