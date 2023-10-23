"use client";
import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Spinner,
  Image
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; 
import secureLocalStorage from "react-secure-storage";
import AuthService from "@/Utils/AuthService";
import {validateEmail, validatePassword } from "@/Utils/Validation";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setError(emailError || passwordError);
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const payload = {
        email: email,
        password: password,
        mobile: "9999999999",
      };

      const response: any = await AuthService.login(payload);
      if (response?.status === 200) {
        const authToken = response?.data?.authToken;
        secureLocalStorage.setItem("id", response?.data?.userId);
        secureLocalStorage.setItem("authToken", JSON.stringify(authToken));
        setIsLoading(false);
        router.push("/dashboard");
      } else {
        setError("Login failed. Please try again."); // Customize error message
        setIsLoading(false);
      }
    } catch (error) {
      setError("An error occurred. Please try again."); // Customize error message
      setIsLoading(false);
    }
  };

  return (
    <Flex
      align="center"
      justify="center"
      minH="100vh"
      bgGradient="linear(to bottom, #FBD38D, #FC8181)"
    >
      <motion.div
        initial={{ opacity: 0, rotateY: -180, translateZ: 0 }}
        animate={{ opacity: 1, rotateY: 0, translateZ: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <Box
          maxW="md"
          w="700px"
          mx={4}
          p={8}
          bg="white"
          borderRadius="lg"
          boxShadow="xl"
          overflow="hidden"
          position="relative"
        >
          <Flex direction="column" align="center" mb={8}>
            <motion.div
              initial={{ opacity: 0, rotateX: -180, translateZ: 0 }}
              animate={{ opacity: 1, rotateX: 0, translateZ: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(50px)",
              }}
            >
              <Box p={4} borderRadius="full" bg="white" boxShadow="xl" mb={4}>
                <Image src="/logo.png" alt="Logo" boxSize="120px"
                 />
              </Box>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20, rotateX: -180, translateZ: 0 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, translateZ: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(50px)",
              }}
            >
              <Heading
                textAlign="center"
                size="lg"
                mb={4}
                color="gray.800"
                fontFamily="Montserrat"
              >
                Welcome Back!
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Sign in to your account
              </Text>
            </motion.div>
          </Flex>
          <form onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0, y: 20, rotateX: -180, translateZ: 0 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, translateZ: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(50px)",
              }}
            >
              <FormControl mb={4}>
                <FormLabel htmlFor="email" color="gray.800">
                  Email
                </FormLabel>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  focusBorderColor="teal.500"
                  color="gray.800"
                  _placeholder={{ color: "gray.500" }}
                  bg="gray.100"
                  variant="filled"
                  _hover={{ bg: "gray.200" }}
                  _focus={{ bg: "gray.200" }}
                />
              </FormControl>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20, rotateX: -180, translateZ: 0 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, translateZ: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(50px)",
              }}
            >
              <FormControl mb={4}>
                <FormLabel htmlFor="password" color="gray.800">
                  Password
                </FormLabel>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  focusBorderColor="teal.500"
                  color="gray.800"
                  _placeholder={{ color: "gray.500" }}
                  bg="gray.100"
                  variant="filled"
                  _hover={{ bg: "gray.200" }}
                  _focus={{ bg: "gray.200" }}
                />
              </FormControl>
            </motion.div>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 20, rotateX: -180, translateZ: 0 }}
                animate={{ opacity: 1, y: 0, rotateX: 0, translateZ: 0 }}
                transition={{ duration: 1, delay: 1.1, ease: "easeInOut" }}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(50px)",
                }}
              >
                <Text color="red.500" mb={4}>
                  {error}
                </Text>
              </motion.div>
            )}
            <motion.div
              initial={{ opacity: 0, y: 20, rotateX: -180, translateZ: 0 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, translateZ: 0 }}
              transition={{ duration: 1, delay: 1.3, ease: "easeInOut" }}
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(50px)",
              }}
            >
              <Button
                type="submit"
                colorScheme="teal"
                size="lg"
                width="full"
                mt={4}
                isLoading={isLoading}
                loadingText="Signing In..."
                spinner={<Spinner color="white" />}
              >
                Sign In
              </Button>
            </motion.div>
          </form>
        </Box>
      </motion.div>
    </Flex>
  );
};

export default Login;


