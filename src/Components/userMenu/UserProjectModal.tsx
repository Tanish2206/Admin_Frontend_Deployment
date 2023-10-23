// components/DesignerProjectModal.tsx
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box,
    Image,
    Button,
    useBreakpointValue,
    Badge,
  } from '@chakra-ui/react';
  
  export interface Project {
    id: number;
    siteImagesUrls: [] | string | '';
    title: string;
    projectType: string;
    payment: string;
    projectStatus: string;
  }
  
  interface DesignerProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    projectData: Project[];
  }
  
  const UserProjectModal: React.FC<DesignerProjectModalProps> = ({ isOpen, onClose, projectData }) => {
    const isMobile = useBreakpointValue({ base: true, md: false });
  
    return (
      <Modal isOpen={isOpen} onClose={onClose} size={isMobile ? 'full' : '5xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Project Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table variant="simple" size={isMobile ? 'sm' : 'md'}>
              <Thead>
                <Tr>
                  <Th>ProjectId</Th>
                  <Th>Image</Th>
                  <Th>Title</Th>
                  <Th>ProjectType</Th>
                  <Th>Payment</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {projectData.map((project) => (
                  <Tr key={project.id}>
                    <Td>{project.id}</Td>
                    <Td>
                      <Box w={isMobile ? '40px' : '50px'} h={isMobile ? '40px' : '50px'}>
                        <Image src={project?.siteImagesUrls[0]} alt={project.title} objectFit="cover" />
                      </Box>
                    </Td>
                    <Td>{project.title}</Td>
                    <Td>{project.projectType}</Td>
                    <Td>
                      {project.payment ? (
                        <Badge colorScheme="green">Done</Badge>
                      ) : (
                        <Badge colorScheme="red">NO</Badge>
                      )}
                    </Td>
                    <Td>{project.projectStatus}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose} size={isMobile ? 'sm' : 'md'}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default UserProjectModal;
  