import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";

export default function AdminProfile() {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={useColorModeValue("gray.100", "gray.800")}
    >
      <Stack spacing={8} mx="auto" maxW="md" py={12} px={6} width="full">
        <Stack align="center" spacing={4}>
          <Avatar size="2xl" src="https://bit.ly/sage-adebayo">
            <AvatarBadge
              as={Button}
              size="sm"
              rounded="full"
              top="-10px"
              right="-5px"
              colorScheme="red"
              aria-label="Remove Image"
            />
          </Avatar>
          <Heading fontSize={{ base: "2xl", md: "3xl" }} textAlign="center">
            User Profile
          </Heading>
        </Stack>
        <Box
          bg={useColorModeValue("white", "gray.700")}
          borderRadius="lg"
          boxShadow="lg"
          p={8}
        >
          <Stack spacing={6}>
            <FormControl id="firstName" isRequired>
              <FormLabel>First name</FormLabel>
              <Input
                placeholder="First Name"
                type="text"
                focusBorderColor="orange.400"
              />
            </FormControl>
            <FormControl id="lastName" isRequired>
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="Last Name"
                type="text"
                focusBorderColor="orange.400"
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder="your-email@example.com"
                type="email"
                focusBorderColor="orange.400"
              />
            </FormControl>
            <FormControl id="mobile" isRequired>
              <FormLabel>Mobile</FormLabel>
              <Input
                isDisabled
                value="124344388"
                placeholder="Mobile"
                type="number"
                focusBorderColor="orange.400"
              />
            </FormControl>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                colorScheme="orange"
                variant="solid"
                size="lg"
                flex={1}
                _hover={{ bg: "orange.400" }}
              >
                Submit
              </Button>
              <Button
                colorScheme="red"
                variant="solid"
                size="lg"
                flex={1}
                _hover={{ bg: "red.400" }}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
