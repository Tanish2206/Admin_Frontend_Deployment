import React from 'react';
import {
  VStack,
  Heading,
  Spinner,
  Stack,
  useBreakpointValue,
  IconButton,
} from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import ImagesList from '../Common/imageList/ImageList';
import AssignProjectInfo from './AssignProjectInfo';

function AssignProjectView({setShow,assignProjectView}:any) {
  
  const isMobile = useBreakpointValue({ base: true, sm: false });

  return (
    <>
      <Stack
        direction={isMobile ? 'column' : 'row'}
        spacing={isMobile ? '4' : '8'}
        alignItems={isMobile ? 'center' : 'flex-start'}
        bg='white'
        p='8'
        mb={4}
        borderRadius='lg'
        shadow='sm'
        overflowX='auto'
      >
        <IconButton
          icon={<ChevronLeftIcon />}
          variant='solid'
          alignSelf='flex-start'
          background="blackAlpha.500"
          color="white"
          onClick={() => setShow(false)} // Go back in browser history
          aria-label={''}        />
        <ImagesList images={assignProjectView}/>
        <VStack flex={1} align={isMobile ? 'center' : 'stretch'} ml={isMobile ? 0 : '8'}>
          <AssignProjectInfo
          showProject={assignProjectView}
           />
        </VStack>
      </Stack>
      {/* Add any additional components or sections */}
    </>
  );
}

export default AssignProjectView;
