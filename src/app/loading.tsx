'use client'
import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Loading = () => {
  return ( 
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to bottom, #FBD38D, #FC8181)"
    >
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: '#ffffff',
          borderRadius: '50%',
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
          transformStyle: 'preserve-3d',
        }}
      />
    </Box>
  );
};

export default Loading;
