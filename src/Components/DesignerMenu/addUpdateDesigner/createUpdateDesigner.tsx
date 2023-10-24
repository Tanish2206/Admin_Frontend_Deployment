import React, { useState, useEffect ,useCallback} from 'react';
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
  Textarea,
  Select,
  IconButton,
  Box,
  Flex,
  Stack,
} from '@chakra-ui/react';
import { CloseIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

type Designer = {
  role:string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobile: string;
  gender: string;
  address: string;
  country: string;
  city: string;
  state: string;
  dateOfBirth: string;
  category: string;
  workingHours: string;
  paymentCondition: string;
  accountName: string;
  accountNumber: string;
  IFSC: string;
  website: string;
  about: string;
  profilePhotoUrl: File | null;
  IDProofUrl: File | null;
};

type UserModalProps = {
  onSave: (user: Designer) => void;
  isOpen: boolean;
  onClose: () => void;
  editUser: Designer | null;

};

const CreateUpdateDesigner: React.FC<UserModalProps> = ({
  onSave,
  isOpen,
  onClose,
  editUser,
}: UserModalProps) => {
  const initialFormData: Designer = {
    role:'Designer',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobile: '',
    gender: '',
    address: '',
    country: '',
    city: '',
    state: '',
    dateOfBirth: '',
    category: '',
    workingHours: '',
    paymentCondition: '',
    accountName: '',
    accountNumber: '',
    IFSC: '',
    website: '',
    about: '',
    profilePhotoUrl: null,
    IDProofUrl: null,
  };

  const [formData, setFormData] = useState<Designer>(initialFormData);
  const [showPassword, setShowPassword] = useState(false);

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
  }, [setFormData]);
  
  useEffect(() => {
    if (isOpen && editUser) {
      setFormData(editUser);
    } else {
      resetForm();
    }
  }, [isOpen, editUser, resetForm]);
  

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, files }:any = e.target;
    if (files && files[0]) {
      if (name === 'profilePhotoUrl') {
        setFormData((prevData) => ({ ...prevData, profilePhotoUrl: files[0] }));
      } else if (name === 'IDProofUrl') {
        setFormData((prevData) => ({ ...prevData, IDProofUrl: files[0] }));
      }
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };



  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
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
          <Stack spacing={4}>
            <Flex direction={['column', 'row']} justify="space-between">
              <FormControl flexBasis={['100%', '48%']}>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName||""}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                />
              </FormControl>

              <FormControl flexBasis={['100%', '48%']}>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName||""}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                />
              </FormControl>
            </Flex>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email||""}
                onChange={handleChange}
                placeholder="Enter Email"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Flex align="center">
                <Input
                  type={showPassword ? 'text' : 'password'} // Toggle input type
                  name="password"
                  value={formData.password||""}
                  onChange={handleChange}
                  placeholder="Enter Password"
                />
                <IconButton
                  aria-label={showPassword ? 'Hide Password' : 'Show Password'}
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  onClick={togglePasswordVisibility}
                  ml="-40px"
                  zIndex={1}
                  backgroundColor="transparent"
                  _hover={{ backgroundColor: 'transparent' }}
                />
              </Flex>
            </FormControl>


            <FormControl>
              <FormLabel>Mobile</FormLabel>
              <Input
                type="text"
                name="mobile"
                value={formData.mobile||""}
                onChange={handleChange}
                placeholder="Enter Mobile"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Gender</FormLabel>
              <Select
                name="gender"
                value={formData.gender||""}
                onChange={handleChange}
                placeholder="Select Gender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Address</FormLabel>
              <Textarea
                name="address"
                value={formData.address||""}
                onChange={handleChange}
                placeholder="Enter Address"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Country</FormLabel>
              <Input
                type="text"
                name="country"
                value={formData.country||""}
                onChange={handleChange}
                placeholder="Enter Country"
              />
            </FormControl>

            <FormControl>
              <FormLabel>City</FormLabel>
              <Input
                type="text"
                name="city"
                value={formData.city||""}
                onChange={handleChange}
                placeholder="Enter City"
              />
            </FormControl>

            <FormControl>
              <FormLabel>State</FormLabel>
              <Input
                type="text"
                name="state"
                value={formData.state||""}
                onChange={handleChange}
                placeholder="Enter State"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Date of Birth</FormLabel>
              <Input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth||""}
                onChange={handleChange}
                placeholder="Enter Date of Birth"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Category</FormLabel>
              <Input
                type="text"
                name="category"
                value={formData.category||""}
                onChange={handleChange}
                placeholder="Enter Category"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Working Hours</FormLabel>
              <Input
                type="text"
                name="workingHours"
                value={formData.workingHours||""}
                onChange={handleChange}
                placeholder="Enter Working Hours"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Payment Condition</FormLabel>
              <Input
                type="text"
                name="paymentCondition"
                value={formData.paymentCondition||""}
                onChange={handleChange}
                placeholder="Enter Payment Condition"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Account Name</FormLabel>
              <Input
                type="text"
                name="accountName"
                value={formData.accountName||""}
                onChange={handleChange}
                placeholder="Enter Account Name"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Account Number</FormLabel>
              <Input
                type="text"
                name="accountNumber"
                value={formData.accountNumber||""}
                onChange={handleChange}
                placeholder="Enter Account Number"
              />
            </FormControl>

            <FormControl>
              <FormLabel>IFSC</FormLabel>
              <Input
                type="text"
                name="IFSC"
                value={formData.IFSC||""}
                onChange={handleChange}
                placeholder="Enter IFSC"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Website</FormLabel>
              <Input
                type="text"
                name="website"
                value={formData.website||""}
                onChange={handleChange}
                placeholder="Enter Website"
              />
            </FormControl>

            <FormControl>
              <FormLabel>About</FormLabel>
              <Textarea
                name="about"
                value={formData.about||""}
                onChange={handleChange}
                placeholder="Enter About"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Profile Photo URL</FormLabel>
              <Input
                 type="file"
                 id="profile_photo"
                 placeholder='profile_photo'
                 name='profilePhotoUrl'
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>ID Proof URL</FormLabel>
              <Input
                 type="file"
                 id="id_proof" 
                 accept="image/*"
                 name='IDProofUrl'
                onChange={handleChange}
                placeholder="Enter ID Proof URL"
              />
            </FormControl>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateUpdateDesigner;
