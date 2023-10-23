'use client'
import { Box, Button, Center, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { useRouter } from 'next/navigation';
const MotionBox = motion(Box);

const NotFound = () => {

  const router=useRouter();
  const handleButtonClick = () => {
    // Logic to go back home
    router.push('/');
  };

  return (
    <Center height="100vh" bgGradient="linear(to-r, purple.500, pink.500)">
      <MotionBox
        w="300px"
        h="300px"
        bg="blue.500"
        borderRadius="50%"
        boxShadow="xl"
        animate={{
          rotateY: [0, -180, -180, 0],
          rotateX: [0, 0, -180, -180],
          rotateZ: [0, 90, 90, 0],
        }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
          times: [0, 0.4, 0.6, 1],
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 1,
        }}
        whilehover={{
          scale: 1.1,
          y: -10,
          boxShadow: '2xl',
        }}
      />
      <Box mt={8}>
        <Heading as="h1" size="2xl" textAlign="center" color="white">
          NOT FOUND
        </Heading>
        <Text mt={4} fontSize="lg" color="white" textAlign="center">
          Click the button below to go back home
        </Text>
        <Button mt={6} colorScheme="pink" onClick={handleButtonClick}>
          Go Back Home
        </Button>
      </Box>
    </Center>
  );
};

export default NotFound;
