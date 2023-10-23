'use client'
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { ErrorPageProps } from "@/Utils/interface";

export default function Error({ error, reset }: ErrorPageProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
    >
      <Heading as="h1" size="2xl" mb={4}>
        Error ....................
      </Heading>
      <Text fontSize="lg" mb={6}>
        Something went wrong
      </Text>
      <Button colorScheme="blue" size="lg" onClick={reset}>
        Try again
      </Button>
    </Box>
  );
}
