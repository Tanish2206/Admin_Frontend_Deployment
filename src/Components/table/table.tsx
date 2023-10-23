import {
  Box,
  HStack, 
  Table,
  Tbody,
  useDisclosure,
} from '@chakra-ui/react';
import Pagination from '../Common/pagination/Pagination';
import { ReusableTableProps } from '@/Utils/interface';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import { useState } from 'react';
// Reusable table component
const ReusableTable: React.FC<ReusableTableProps> = ({
  headers = [],
  data = [],
  currentPage,
  totalPages,
  onPageChange,
  onhandleFileChange,
  onEdit,
  onhandleShowProject,
  onDelete,
  handleStatus,
  handleDownload,
  handleUpload,
  isAction = false,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItemId, setSelectedItemId] = useState<number | null|any>(null);

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const handleDelete = (id: number) => {
    setSelectedItemId(id);
    onOpen();
  };

  const handleConfirmDelete = () => {
    if (selectedItemId) {
      onDelete(selectedItemId);
      onClose();
      setSelectedItemId(null);
    }
  };

  return (
    <Box bg="white" p={5} shadow="lg" borderRadius="lg" overflowX="auto">
      <Table variant="simple">
        <TableHeader headers={headers} />
        <Tbody>
          {data?.map((item:any) => (
            <TableRow
              key={item.id}
              item={item}
              headers={headers}
              isAction={isAction}
              onhandleFileChange={onhandleFileChange}
              onEdit={onEdit} // Just call onEdit directly, no need for a separate function
              onDelete={() => handleDelete(item?.id)}
              onhandleShowProject={onhandleShowProject}
               // Use handleDelete for confirmation
              handleStatusChange={handleStatus}
              handleDownload={()=>handleDownload}
              handleUpload={()=>handleUpload}
            />
          ))}
        </Tbody>
      </Table>
      <HStack mt={4} justify="flex-end">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </HStack>

      {/* Confirm Delete Modal */}
      <ConfirmDeleteModal
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={handleConfirmDelete}
      />
    </Box>
  );
};

export default ReusableTable;
