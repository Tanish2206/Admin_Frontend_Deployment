import React, { useState, useEffect } from "react";
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
  FormErrorMessage,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { isValidEmail, isValidMobile } from "@/Utils/Validation";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
};

type UserModalProps = {
  onSave: (user: User) => void;
  isOpen: boolean;
  onClose: () => void;
  editUser: User | null;
};

const UserModal: React.FC<UserModalProps> = ({
  onSave,
  isOpen,
  onClose,
  editUser,
}: any) => {
  const [formData, setFormData] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  const [formErrors, setFormErrors] = useState<Partial<User>>({});

  useEffect(() => {
    if (isOpen && editUser) {
      setFormData(editUser);
    } else {
      resetForm();
    }
  }, [isOpen, editUser]);

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
    });
    setFormErrors({});
  };

  const validateForm = () => {
    const errors: Partial<User> = {};

    if (!formData.firstName) {
      errors.firstName = "First Name is required";
    }

    if (!formData.lastName) {
      errors.lastName = "Last Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.mobile) {
      errors.mobile = "Mobile No is required";
    } else if (!isValidMobile(formData.mobile)) {
      errors.mobile = "Invalid mobile number format";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSave(formData);
      onClose();
    }
  };

  const handleChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      firstName: value,
    }));

    if (formErrors.firstName) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "",
      }));
    }
  };

  const handleChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      lastName: value,
    }));

    if (formErrors.lastName) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "",
      }));
    }
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      email: value,
    }));

    if (formErrors.email) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }
  };

  const handleChangeMobile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      mobile: value,
    }));

    if (formErrors.mobile) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        mobile: "",
      }));
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {editUser ? "Edit User" : "Create User"}
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
            <FormControl isInvalid={!!formErrors.firstName}>
              <FormLabel>First Name</FormLabel>
              <Input
                value={formData.firstName}
                onChange={handleChangeFirstName}
                placeholder="Enter First name"
              />
              <FormErrorMessage>{formErrors.firstName}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!formErrors.lastName} mt={4}>
              <FormLabel>Last Name</FormLabel>
              <Input
                value={formData.lastName}
                onChange={handleChangeLastName}
                placeholder="Enter Last name"
              />
              <FormErrorMessage>{formErrors.lastName}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!formErrors.email} mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                value={formData.email}
                onChange={handleChangeEmail}
                placeholder="Enter email"
              />
              <FormErrorMessage>{formErrors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!formErrors.mobile} mt={4}>
              <FormLabel>Mobile No</FormLabel>
              <Input
                value={formData.mobile}
                onChange={handleChangeMobile}
                placeholder="Enter mobile number"
              />
              <FormErrorMessage>{formErrors.mobile}</FormErrorMessage>
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

export default UserModal;
